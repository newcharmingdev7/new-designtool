import Route from '@ember/routing/route';

export default class ComponentsFormToggleRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'focus'];
    return {
      STATES,
    };
  }
}
