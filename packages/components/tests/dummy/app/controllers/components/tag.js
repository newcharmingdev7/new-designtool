/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TagController extends Controller {
  // notice: this is used as "noop" function for the onDismiss callback of the Tag component
  @action
  noop() {}
}
