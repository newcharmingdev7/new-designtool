import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HdsTabsIndexComponent extends Component {
  @tracked tabNodes = [];
  @tracked tabIds = [];
  @tracked panelNodes = [];
  @tracked panelIds = [];
  @tracked selectedTabIndex;

  @action
  didInsert() {
    // default starting tab index
    let initialTabIndex = 0;

    this.tabNodes.forEach((tabElement, index) => {
      if (tabElement.hasAttribute('data-is-selected')) {
        initialTabIndex = index;
      }
    });
    this.selectedTabIndex = initialTabIndex;
  }

  @action
  didInsertTab(element) {
    this.tabNodes = [...this.tabNodes, element];
    this.tabIds = [...this.tabIds, element.id];
  }

  @action
  didInsertPanel(panelId, element) {
    this.panelNodes = [...this.panelNodes, element];
    this.panelIds = [...this.panelIds, panelId];
  }

  @action
  handleClick(index, e) {
    e.preventDefault();
    this.selectedTabIndex = index;
  }

  @action
  handleKeyUp(index, e) {
    const leftArrow = 37;
    const rightArrow = 39;
    const downArrow = 40;

    if (e.keyCode === rightArrow) {
      if (index < this.tabIds.length - 1) {
        index++;
        this.selectTab(index, e);
      }
    } else if (e.keyCode === leftArrow) {
      if (index > 0) {
        index--;
        this.selectTab(index, e);
      }
    } else if (e.keyCode === downArrow) {
      this.setSelectedPanelFocus(index, e);
    }
  }

  // Select tab for keyboard & mouse navigation:
  selectTab(index, e) {
    e.preventDefault();
    this.selectedTabIndex = index;
    this.tabNodes[index].focus();
  }

  setSelectedPanelFocus(index, e) {
    e.preventDefault();
    this.panelNodes[index].focus();
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-tabs'];

    return classes.join(' ');
  }
}
