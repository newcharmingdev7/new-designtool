/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DismissButtonController extends Controller {
  @action
  onClickDismissButton() {
    console.log('`Hds::DismissButton` clicked');
  }
}
