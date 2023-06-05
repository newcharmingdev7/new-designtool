/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/page-header/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      hbs`<Hds::PageHeader id="test-page-header" @title="Page title" />`
    );
    assert.dom('#test-page-header').hasClass('hds-page-header');
  });

  // CONTEXTUAL COMPONENTS

  test('it should render contextual components', async function (assert) {
    await render(
      hbs`<Hds::PageHeader id="test-page-geader" @title="Page title" as |PH|>
            <PH.Breadcrumb>
              <Hds::Breadcrumb>
                <Hds::Breadcrumb::Item @text="Breadcrumb" />
              </Hds::Breadcrumb>
            </PH.Breadcrumb>
            <PH.IconTile @icon="server-cluster" />
            <PH.Actions>Actions</PH.Actions>
            <PH.Subtitle>Subtitle</PH.Subtitle>
            <PH.Description>Description</PH.Description>
            <PH.Generic><p class="custom">Generic</p></PH.Generic>
          </Hds::PageHeader>`
    );
    assert.dom('.hds-page-header').exists();
    assert.dom('.hds-breadcrumb').exists();
    assert.dom('.hds-icon-tile').exists();
    assert.dom('.hds-page-header__actions').exists();
    assert.dom('.hds-page-header__actions').hasText('Actions');
    assert.dom('.hds-page-header__subtitle').exists();
    assert.dom('.hds-page-header__subtitle').hasText('Subtitle');
    assert.dom('.hds-page-header__description').exists();
    assert.dom('.hds-page-header__description').hasText('Description');
    assert.dom('.custom').exists();
    assert.dom('.custom').hasText('Generic');
  });
  test('it should not render the contextual components if not provided', async function (assert) {
    await render(hbs`<Hds::PageHeader @title="Page title" />`);
    assert.dom('.hds-breadcrumb').doesNotExist();
    assert.dom('.hds-page-header__actions').doesNotExist();
    assert.dom('.hds-page-header__subtitle').doesNotExist();
    assert.dom('.hds-page-header__description').doesNotExist();
    assert.dom('.hds-icon-tile').doesNotExist();
  });

  // ASSERTIONS

  test('it should throw an assertion if a @title is missing/has no value', async function (assert) {
    const errorMessage = '@title for "Hds::PageHeader" must have a valid value';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::PageHeader/>`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
