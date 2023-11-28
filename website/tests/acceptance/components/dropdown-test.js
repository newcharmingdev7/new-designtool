/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

import { merge } from 'lodash';

module('Acceptance | components/dropdown', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/dropdown', async function (assert) {
    await visit('/components/dropdown');

    assert.strictEqual(currentURL(), '/components/dropdown');
  });

  test('components/dropdown page passes automated a11y checks', async function (assert) {
    let axeOptions = merge(globalAxeOptions, {
      rules: {
        list: {
          enabled: false,
        },
      },
    });

    await visit('/components/dropdown');
    await a11yAudit(axeOptions);
    assert.ok(true, 'a11y automation audit passed');
  });
});
