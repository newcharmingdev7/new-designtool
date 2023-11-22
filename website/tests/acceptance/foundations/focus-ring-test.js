/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { globalAxeOptions } from 'website/tests/a11y-helper';

module('Acceptance | foundations/focus-ring', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /foundations/focus-ring', async function (assert) {
    await visit('/foundations/focus-ring');

    assert.strictEqual(currentURL(), '/foundations/focus-ring');
  });

  test('foundations/focus-ring page passes automated a11y checks', async function (assert) {
    await visit('/foundations/focus-ring');

    await a11yAudit(globalAxeOptions);

    assert.ok(true, 'a11y automation audit passed');
  });
});
