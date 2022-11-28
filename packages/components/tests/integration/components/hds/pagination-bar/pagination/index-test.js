import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | hds/pagination-bar/pagination/index',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders the component', async function (assert) {
      await render(hbs`<Hds::PaginationBar::Pagination />`);
      assert.dom(this.element).exists();
    });

    test('it should render with a CSS class that matches the component name', async function (assert) {
      await render(
        hbs`<Hds::PaginationBar::Pagination id="test-pagination" />`
      );
      assert.dom('#test-pagination').hasClass('hds-pagination');
    });
  }
);
