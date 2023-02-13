/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FormCheckboxController extends Controller {
  // notice: this is used as "noop" function for the component documentation
  // I tried to use an helper, but without success (see https://hashicorp.slack.com/archives/C11JCBJTW/p1648751235987409)
  @action
  noop() {}
}
