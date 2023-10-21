/* eslint-env node */
/* eslint-disable no-console */

import fs from 'fs';

const code_changelogs = [
  {
    id: 'design-tokens',
    relativePath: '../packages/tokens/CHANGELOG.md',
  },
  {
    id: 'flight-icons',
    relativePath: '../packages/flight-icons/CHANGELOG.md',
  },
  {
    id: 'ember-flight-icons',
    relativePath: '../packages/ember-flight-icons/CHANGELOG.md',
  },
  {
    id: 'components',
    relativePath: '../packages/components/CHANGELOG.md',
  },
];

const figma_changelogs = [
  {
    id: 'figma-library-components',
    title: 'Components library',
    relativePath: '../packages/components/CHANGELOG-FIGMA-COMPONENTS.md',
  },
  {
    id: 'figma-library-foundations',
    title: 'Foundations library',
    relativePath: '../packages/components/CHANGELOG-FIGMA-FOUNDATIONS.md',
  },
];

const addHeader = () => {
  let header = '';
  header +=
    '<!--\n Copyright (c) HashiCorp, Inc.\n SPDX-License-Identifier: MPL-2.0\n-->\n\n';
  header +=
    '<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->\n\n';
  return header;
};

const replacePageTitleWithNpmInfo = (sourceText) => {
  const regex = RegExp(/^# (.*)$\n/gm);
  let matches = regex.exec(sourceText);
  let replacementText = '';
  if (matches) {
    const packageName = matches[1];
    const packageNameEncoded = encodeURIComponent(packageName);
    replacementText += '<p class="doc-whats-new-changelog-npm-info">\n';
    replacementText += `  <strong><code>npm package: ${packageName}</code></strong>\n`;
    replacementText += `  <a href="https://badge.fury.io/js/${packageNameEncoded}">\n    <img src="https://badge.fury.io/js/${packageNameEncoded}.svg" alt="npm version" height="20">\n  </a>\n`;
    replacementText += '</p>\n';
  } else {
    replacementText =
      "# ⚠️ An error occurred: page title didn't match the expected format";
  }
  return sourceText.replace(/^# (.*)$\n/gm, replacementText);
};

const replacePageTitleWithFigmaNameAndLink = (sourceText, replacedTitle) => {
  const regex = RegExp(/^# \[(.*)\]\((.*)\)$\n/gm);
  let matches = regex.exec(sourceText);
  let replacementText = '';
  if (matches) {
    const figmaNameLibrary = matches[1];
    const figmaNameUrl = matches[2];
    replacementText += `# ${replacedTitle}\n\n`;
    replacementText += '<p class="doc-whats-new-changelog-figma-library">\n';
    replacementText += `  <strong>Figma library: <a href="${figmaNameUrl}" target="_blank" rel="noopener noreferrer">${figmaNameLibrary}</a></strong>\n`;
    replacementText += '</p>\n\n';
  } else {
    replacementText =
      "# ⚠️ An error occurred: page title didn't match the expected format";
  }
  return sourceText.replace(/^# (.*)$\n/gm, replacementText);
};

const keepOnlySubsetOfEntries = (sourceText, regex, count) => {
  const lines = sourceText.split(/\r?\n/);
  let entriesCounter = 0;
  let subsetText = '';

  lines.forEach((line) => {
    if (line.match(regex)) {
      entriesCounter++;
    }
    // configure here how many entries we want to keep
    if (entriesCounter > count) {
      return;
    } else {
      subsetText += `${line}\n`;
    }
  });
  return subsetText;
};

const increaseHeadingsLevelByOne = (sourceText) => {
  return sourceText.replace(/^#/gm, '##');
};

const replaceMajorMinorPatchHeadings = (sourceText) => {
  return sourceText.replace(
    /^### (Major|Minor|Patch) Changes/gm,
    '**$1 changes**'
  );
};

const replaceDateHeadings = (sourceText) => {
  return sourceText.replace(/^### (.*)/gm, '**$1**');
};

const appendExternalLinks = (sourceText, sourcePath) => {
  let externalLinks = '';
  externalLinks += '\n---\n\n';
  const relativePath = sourcePath.replace(/^..\//, '');
  externalLinks += `_[Read the full changelog](https://github.com/hashicorp/design-system/blob/main/${relativePath})_`;
  return sourceText + externalLinks;
};

// CODE CHANGELOGS

code_changelogs.forEach((changelog) => {
  try {
    const sourcePath = changelog.relativePath;
    const changelogSource = fs.readFileSync(sourcePath, 'utf8');
    let changelogModified = changelogSource;
    changelogModified = replacePageTitleWithNpmInfo(changelogModified);
    changelogModified = keepOnlySubsetOfEntries(changelogModified, /^## /, 10);
    changelogModified = replaceMajorMinorPatchHeadings(changelogModified);
    // changelogModified = increaseHeadingsLevelByOne(changelogModified);
    changelogModified = appendExternalLinks(changelogModified, sourcePath);
    const content = addHeader() + changelogModified;
    fs.writeFileSync(
      `./docs/whats-new/release-notes/partials/${changelog.id}.md`,
      content,
      'utf8'
    );
  } catch (err) {
    console.error(err);
  }
});

// FIGMA CHANGELOGS

figma_changelogs.forEach((changelog) => {
  try {
    const newTitle = changelog.title;
    const sourcePath = changelog.relativePath;
    const changelogSource = fs.readFileSync(sourcePath, 'utf8');
    let changelogModified = changelogSource;
    changelogModified = replacePageTitleWithFigmaNameAndLink(
      changelogModified,
      newTitle
    );
    changelogModified = keepOnlySubsetOfEntries(changelogModified, /^### /, 10);
    // changelogModified = replaceDateHeadings(changelogModified);
    changelogModified = increaseHeadingsLevelByOne(changelogModified);
    changelogModified = appendExternalLinks(changelogModified, sourcePath);
    const content = addHeader() + changelogModified;
    fs.writeFileSync(
      `./docs/whats-new/release-notes/partials/${changelog.id}.md`,
      content,
      'utf8'
    );
  } catch (err) {
    console.error(err);
  }
});
