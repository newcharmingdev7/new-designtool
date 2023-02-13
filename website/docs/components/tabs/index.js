/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';

import { COLORS } from '@hashicorp/design-system-components/components/hds/tag';

export default class Index extends Component {
  get STATES() {
    // these are used only for presentation purpose in the showcase
    return ['default', 'hover', 'active', 'focus'];
  }

  get COLORS() {
    return COLORS;
  }

  @action
  toggleHighlight() {
    this.showHighlight = !this.showHighlight;
  }

  @action
  logClickedTab(event) {
    const tabId = event.target.id;
    console.log(`Tab with ID "${tabId}" clicked!`);
  }
}
