import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { getElementId } from '../form/utils/getElementId';

export const DEFAULT_SIZE = 'regular';
export const DEFAULT_TYPE = 'neutral';
export const SIZES = ['small', 'regular', 'large'];
export const TYPES = ['neutral', 'warning', 'critical'];

export default class HdsDialogIndexComponent extends Component {
  @action
  setupDialog(element) {
    this.element = element;
    element.showModal();
  }

  @action
  onClick(event) {
    // This may seem counterintuitive, but the <dialog> element is the target only when the backdrop is clicked
    // otherwise the target would be a child of the <dialog>
    if (event.target === this.element) {
      this.closeDialog();
    }
  }

  @action
  closeDialog() {
    // we call the "onClose" callback if it exists (and is a function)
    if (this.args.onClose && typeof this.args.onClose === 'function') {
      this.args.onClose();
    }
    this.element.close();
  }

  /**
   * Sets the size of the dialog
   * Accepted values: small, regular, large
   *
   * @param size
   * @type {string}
   * @default 'regular'
   */
  get size() {
    let { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Hds::Dialog" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * Sets the type of the dialog
   * Accepted values: neutral, warning, critical
   *
   * @param type
   * @type {string}
   * @default 'neutral'
   */
  get type() {
    let { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "Hds::Dialog" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${type}`,
      TYPES.includes(type)
    );

    return type;
  }

  /**
   * Calculates the unique ID to assign to the title
   */
  get id() {
    return getElementId(this);
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-dialog'];

    // add a class based on the @size argument
    classes.push(`hds-dialog--size-${this.size}`);

    // add a class based on the @type argument
    classes.push(`hds-dialog--type-${this.type}`);

    return classes.join(' ');
  }
}
