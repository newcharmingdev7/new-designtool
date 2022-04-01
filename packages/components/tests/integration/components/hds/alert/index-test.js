import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// const NOOP = () => {};

module('Integration | Component | hds/alert/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(
      hbs`<Hds::Alert @title="I'm a cool alert!" id="test-alert" />`
    );
    assert.dom('#test-alert').hasClass('hds-alert');
  });

  // TYPE

  test('it should render the "page" type if no @type is declared', async function (assert) {
    await render(hbs`<Hds::Alert @description="yo" id="test-alert" />`);
    assert.dom('#test-alert').hasClass('hds-alert--type-page');
  });
  test('it should render the correct CSS type class if @type prop is declared', async function (assert) {
    await render(
      hbs`<Hds::Alert @type="inline" @description="yo" id="test-alert" />`
    );
    assert.dom('#test-alert').hasClass('hds-alert--type-inline');
  });

  // ICON

  test('it should render an icon by default depending on the type and color', async function (assert) {
    // here we don't test all the possible combinations, only some of them as precaution
    assert.expect(6);
    await render(hbs`<Hds::Alert @description="yo" />`);
    assert.dom('.flight-icon-info').exists();
    await render(hbs`<Hds::Alert @description="yo" @type="compact" />`);
    assert.dom('.flight-icon-info-fill').exists();
    await render(hbs`<Hds::Alert @description="yo" @color="highlight" />`);
    assert.dom('.flight-icon-info').exists();
    await render(hbs`<Hds::Alert @description="yo" @color="success" />`);
    assert.dom('.flight-icon-check-circle').exists();
    await render(hbs`<Hds::Alert @description="yo" @color="warning" />`);
    assert.dom('.flight-icon-alert-triangle').exists();
    await render(hbs`<Hds::Alert @description="yo" @color="critical" />`);
    assert.dom('.flight-icon-alert-diamond').exists();
  });

  test('if an icon is declared, the icon should render in the component and override the default one', async function (assert) {
    assert.expect(2);
    await render(hbs`<Hds::Alert @description="yo" @icon="clipboard-copy" />`);
    assert.dom('.flight-icon-clipboard-copy').exists();
    await render(
      hbs`<Hds::Alert @description="yo" @type="compact" @icon="clipboard-copy" />`
    );
    assert.dom('.flight-icon-clipboard-copy').exists();
  });

  test('it should display no icon when @icon is set to false', async function (assert) {
    await render(hbs`<Hds::Alert @title="yo" @icon={{false}} />`);
    assert.dom('.flight-icon').doesNotExist();
  });

  // TEXT (TITLE + DESCRIPTION)

  test('it should render the title when the @title argument is provided', async function (assert) {
    await render(hbs`<Hds::Alert @title="This is the title" />`);
    assert.dom(this.element).hasText('This is the title');
  });
  test('it should render the description when the @description argument is provided', async function (assert) {
    await render(hbs`<Hds::Alert @description="This is the description" />`);
    assert.dom(this.element).hasText('This is the description');
  });
  test('it should render both the title and the description when both the @title and @description arguments are provided', async function (assert) {
    assert.expect(2);
    await render(
      hbs`<Hds::Alert @title="This is the title" @description="This is the description" />`
    );
    assert.dom('.hds-alert__title').hasText('This is the title');
    assert.dom('.hds-alert__description').hasText('This is the description');
  });
  test('it should render rich HTML when the @description argument contains HTML tags', async function (assert) {
    assert.expect(8);
    await render(
      hbs`<Hds::Alert @description="Hello <strong>strong</strong> and <em>em</em> and <code>code</code> and <a href='#'>link</a>" />`
    );
    assert.dom('.hds-alert__description strong').exists().hasText('strong');
    assert.dom('.hds-alert__description em').exists().hasText('em');
    assert.dom('.hds-alert__description code').exists().hasText('code');
    assert.dom('.hds-alert__description a').exists().hasText('link');
  });
  // TODO add a case for compact that should have only the description?

  // ACTIONS

  test('it should render any content passed to the <:actions> named block', async function (assert) {
    assert.expect(2);
    await render(
      hbs`<Hds::Alert @description="yo" id="test-alert"><:actions><pre>test</pre></:actions></Hds::Alert>`
    );
    assert.dom('#test-alert .hds-alert__actions pre').exists().hasText('test');
  });
  test('it should render an Hds::Button component yielded to the <:actions> named block', async function (assert) {
    assert.expect(2);
    await render(
      hbs`<Hds::Alert @description="yo" id="test-alert"><:actions as |A|><A.Button @text="I am a button" @size="small" @color="secondary" /></:actions></Hds::Alert>`
    );
    assert
      .dom(
        '#test-alert .hds-alert__actions button.hds-button.hds-button--size-small.hds-button--color-secondary'
      )
      .exists()
      .hasText('I am a button');
  });
  test('it should render an Hds::Link::Standalone component yielded to the <:actions> named block', async function (assert) {
    assert.expect(2);
    await render(
      hbs`<Hds::Alert @description="yo" id="test-alert"><:actions as |A|><A.Link::Standalone @icon="plus" @text="I am a link" href="#" @size="small" @color="secondary" /></:actions></Hds::Alert>`
    );
    assert
      .dom(
        '#test-alert .hds-alert__actions a.hds-link-standalone.hds-link-standalone--size-small.hds-link-standalone--color-secondary'
      )
      .exists()
      .hasText('I am a link');
  });

  // DISMISS

  test('it should not render the "dismiss" button by default', async function (assert) {
    await render(hbs`<Hds::Alert @description="yo" />`);
    assert.dom('button.hds-alert__dismiss').doesNotExist();
  });
  // TODO! how can this be done??
  // skip('it should render the "dismiss" button if a callback function is passed to the @onClose argument', async function (assert) {
  //   await render(hbs`<Hds::Alert @description="yo" @onClose={{NOOP}} />`);
  //   assert.dom('button.hds-alert__dismiss').exists();
  // });

  // A11Y

  // TODO this is only a partial implementation, we'll wait for the a11y review of the component to add all the other missing requirements
  test('it should render with the correct semantic tags and aria attributes', async function (assert) {
    await render(
      hbs`<Hds::Alert @title="This is the title" @description="This is the description" id="test-alert" />`
    );
    assert.dom('#test-alert').hasAttribute('role', 'alert');
  });

  // ASSERTIONS

  test('it should throw an assertion if an incorrect value for @type is provided', async function (assert) {
    const errorMessage =
      '@type for "Hds::Alert" must be one of the following: page, inline, compact, toast; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Alert @type="foo" @description="yo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if a "compact" alerts is rendered with @icon equal to false', async function (assert) {
    const errorMessage =
      '@icon for "Hds::Alert" with @type "compact" is required';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      hbs`<Hds::Alert @type="compact" @description="yo" @icon={{false}} />`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if an incorrect value for @color is provided', async function (assert) {
    const errorMessage =
      '@color for "Hds::Alert" must be one of the following: neutral, highlight, success, warning, critical; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Alert @color="foo" @description="yo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('Throw an assertion if both @title and @description are missing/have no value', async function (assert) {
    const errorMessage =
      'you need to pass @title or @description to the "Hds::Alert" component';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Alert />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
