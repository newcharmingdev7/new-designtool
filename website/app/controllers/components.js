/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';

export default class ComponentsController extends Controller {
  get cards() {
    // we want to use a flat tree here...
    const tocTree = this.model.toc.flat;
    const sections = ['components', 'overrides', 'layouts', 'utilities'];
    const cards = {};
    sections.forEach((section) => {
      cards[section] = tocTree
        .filter(
          (page) =>
            page.pageParents[0] === section &&
            !page.pageAttributes?.navigation?.hidden
        )
        .map((page) => {
          return {
            image: page.pageAttributes.previewImage,
            title:
              page.pageAttributes?.navigation?.label ||
              page.pageAttributes.title,
            caption: page.pageAttributes.caption,
            route: 'show',
            model: page.pageURL,
          };
        });
    });
    return cards;
  }
}
