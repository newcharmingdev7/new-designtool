import Component from '@glimmer/component';

export default class HdsPaginationIndexComponent extends Component {
  // UNCOMMENT THIS IF YOU NEED A CONSTRUCTOR
  // constructor() {
  //   super(...arguments);
  //   // ADD YOUR ASSERTIONS HERE
  // }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-pagination-bar', 'hds-typography-body-200', 'hds-font-weight-medium'];

    // add a class based on the @xxx argument
    // classes.push(`hds-pagination--[variant]-${this.xxx}`);

    return classes.join(' ');
  }
}
