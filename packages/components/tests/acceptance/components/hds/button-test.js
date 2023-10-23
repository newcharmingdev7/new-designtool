import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | Component | hds/button', function (hooks) {
  setupApplicationTest(hooks);

  test('Components/button passes a11y automated checks', async function (assert) {
    await visit('/components/button');
    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});
