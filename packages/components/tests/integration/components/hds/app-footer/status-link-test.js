/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | hds/app-footer/status-link',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        hbs`<Hds::AppFooter::StatusLink @status="operational" id="test-status-link" />`
      );
      assert.dom('#test-status-link').hasClass('hds-app-footer__status-link');
    });

    // OPTIONS

    // status

    test('it should display text, icon, and icon color matching the passed in status', async function (assert) {
      await render(hbs`<div class="hds-app-footer--theme-light">
        <Hds::AppFooter::StatusLink id="test-operational" @status="operational" />
        <Hds::AppFooter::StatusLink id="test-degraded" @status="degraded" />
        <Hds::AppFooter::StatusLink id="test-maintenance" @status="maintenance" />
        <Hds::AppFooter::StatusLink id="test-critical" @status="critical" />
      </div>`);
      // operational
      assert
        .dom('#test-operational')
        .hasText('System operational')
        .hasClass('hds-app-footer__status-link--operational');
      assert.dom('#test-operational .flight-icon-check-circle').hasStyle({
        fill: 'rgb(0, 138, 34)',
      });
      // degraded
      assert
        .dom('#test-degraded')
        .hasText('System degraded')
        .hasClass('hds-app-footer__status-link--degraded');
      assert.dom('#test-degraded .flight-icon-alert-triangle').hasStyle({
        fill: 'rgb(187, 90, 0)',
      });
      // maintenance
      assert
        .dom('#test-maintenance')
        .hasText('System maintenance')
        .hasClass('hds-app-footer__status-link--maintenance');
      assert.dom('#test-maintenance .flight-icon-alert-triangle').hasStyle({
        fill: 'rgb(187, 90, 0)',
      });
      // critical
      assert
        .dom('#test-critical')
        .hasText('System critical')
        .hasClass('hds-app-footer__status-link--critical');
      assert.dom('#test-critical .flight-icon-x-circle').hasStyle({
        fill: 'rgb(229, 34, 40)',
      });
    });

    // text, statusIcon, statusIconColor

    test('it should display the custom text, icon color, and icon passed in', async function (assert) {
      await render(hbs`
      <Hds::AppFooter::StatusLink
        @text="Waypoint"
        @statusIcon="waypoint"
        @statusIconColor="var(--token-color-waypoint-brand)"
      />
    `);
      assert.dom('.hds-app-footer__status-link').hasText('Waypoint');
      assert.dom('.hds-app-footer__status-link .flight-icon').exists();
      // .hasStyle({'--hds-app-footer-status-icon-color': 'var(--token-color-waypoint-brand)'})
    });

    // href

    test('it should use the passed in href for the link', async function (assert) {
      await render(hbs`
      <Hds::AppFooter::StatusLink @status="operational" @href="https://www.hashicorp.com/custom-url" />
    `);
      assert
        .dom('.hds-app-footer__status-link')
        .hasAttribute('href', 'https://www.hashicorp.com/custom-url');
    });

    // ASSERTIONS

    test('it should throw an assertion if neither @text nor @status are provided', async function (assert) {
      const errorMessage =
        'Either @status or @text for "Hds::AppFooter::StatusLink" must have a valid value';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(hbs`<Hds::AppFooter::StatusLink />`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });

    test('it should throw an assertion if an incorrect value for @status is provided', async function (assert) {
      const errorMessage =
        '@status for "Hds::AppFooter" must be one of the following: operational, degraded, maintenance, critical received: foo';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(hbs`<Hds::AppFooter::StatusLink @status="foo" />`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });
  }
);
