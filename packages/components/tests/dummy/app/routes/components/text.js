import Route from '@ember/routing/route';

import {
  AVAILABLE_SIZES as DISPLAY_AVAILABLE_SIZES,
  AVAILABLE_WEIGHTS_PER_SIZE as DISPLAY_AVAILABLE_WEIGHTS_PER_SIZE,
} from '@hashicorp/design-system-components/components/hds/text/display';
import {
  AVAILABLE_SIZES as BODY_AVAILABLE_SIZES,
  AVAILABLE_WEIGHTS_PER_SIZE as BODY_AVAILABLE_WEIGHTS_PER_SIZE,
} from '@hashicorp/design-system-components/components/hds/text/body';
import {
  AVAILABLE_SIZES as CODE_AVAILABLE_SIZES,
  AVAILABLE_WEIGHTS_PER_SIZE as CODE_AVAILABLE_WEIGHTS_PER_SIZE,
} from '@hashicorp/design-system-components/components/hds/text/code';

export default class ComponentsTextRoute extends Route {
  model() {
    return {
      DISPLAY_AVAILABLE_SIZES,
      DISPLAY_AVAILABLE_WEIGHTS_PER_SIZE,
      BODY_AVAILABLE_SIZES,
      BODY_AVAILABLE_WEIGHTS_PER_SIZE,
      CODE_AVAILABLE_SIZES,
      CODE_AVAILABLE_WEIGHTS_PER_SIZE,
    };
  }
}
