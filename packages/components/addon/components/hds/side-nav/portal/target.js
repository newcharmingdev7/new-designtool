import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { DEBUG } from '@glimmer/env';
import Ember from 'ember';

export default class SidenavPortalTarget extends Component {
  @service router;

  @tracked numSubnavs = 0;

  static get prefersReducedMotionOverride() {
    return Ember.testing;
  }

  prefersReducedMotionMQ = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  get prefersReducedMotion() {
    return (
      this.constructor.prefersReducedMotionOverride ||
      (this.prefersReducedMotionMQ && this.prefersReducedMotionMQ.matches)
    );
  }

  @action
  panelsChanged(portalCount) {
    this.numSubnavs = portalCount;
  }

  @action
  animateSubnav(element, [count]) {
    /*
     * Here is what the layout looks like for this setup
     *

                                    SideNav
                                    +----------------------+
                                    | +------------------+ |
                                    | |    ("header")    | |
                                    | +------------------+ |
                                    |                      |
                                    | +------------------+ |
                                    | |    ("body")      | |
        (PortalTarget)              | |                  | |
        +----------------------------------------------+ | |
        | +----------+  +----------+  |  +----------+  | | |
        | | (Portal) |  | (Portal) |     | (Portal) |  | | |
        | |          |  |          |  |  |          |  | | |
        | |  hidden  |  |  hidden  |     | *active* |  | | |
        | |   panel  |  |   panel  |  |  |   panel  |  | | |
        | |          |  |          |     |          |  | | |
        | |          |  |          |  |  |          |  | | |
        | |          |  |          |     |          |  | | |
        | |          |  |          |  |  |          |  | | |
        | |          |  |          |     |          |  | | |
        | |          |  |          |  |  |          |  | | |
        | |          |  |          |     |          |  | | |
        | +----------+  +----------+  |  +----------+  | | |
        +----------------------------------------------+ | |
                                    | |                  | |
                                    | +------------------+ |
                                    |                      |
                                    | +------------------+ |
                                    | |    ("footer")    | |
                                    | +------------------+ |
                                    +----------------------+

     *
     * every time `HcAppFrame::SideNav::Portal` renders, it contains a portaled "panel"
     * that is rendered into the `hds-side-nav__content-panels` (inside the PortalTarget).
     *
     * Rendering or unrendering other `HcAppFrame::SideNav::Portal`s triggers the number of
     * subnavs to change (via `numSubnavs`), so this function runs and slides
     * `hds-side-nav__content-panels` left or right using the `element.animate` api.
     *
     * */

    let activeIndex = count - 1;
    let targetElement = element;
    let { prefersReducedMotion } = this;

    let styles = getComputedStyle(targetElement);
    let columnWidth = styles.getPropertyValue(
      '--hds-app-sidenav-width-expanded'
    );
    let slideDuration = prefersReducedMotion ? 0 : 150;
    let fadeDuration = prefersReducedMotion ? 0 : 175;
    let fadeDelay = prefersReducedMotion ? 0 : 50;

    // slide entire parent panel
    let start = styles.transform;
    let end = `translateX(-${activeIndex * parseInt(columnWidth, 10)}px)`;
    let anim = targetElement.animate(
      [{ transform: start }, { transform: end }],
      {
        duration: slideDuration,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        fill: 'forwards',
      }
    );
    // Notice: we don't add the styles by default because it writes a `style` attribute to the element and it causes an additional re-render
    if (DEBUG) {
      anim.commitStyles();
    }
    anim.finished.then(() => {
      // uncomment this if we need/want to scroll the element to the top
      // targetElement.scrollIntoView(true);
      if (activeIndex > 0) {
        let allPrev = Array.from(targetElement.children).slice(0, activeIndex);
        for (let ele of allPrev) {
          ele.ariaHidden = 'true';
          ele.style.setProperty('visibility', 'hidden');
          ele.style.setProperty('opacity', '0');
        }
      }
      // Notice: we don't add the styles by default because it writes a `style` attribute to the element and it causes an additional re-render
      if (DEBUG) {
        anim.commitStyles();
      }
    });

    // fade in next panel
    let nextPanelEl = targetElement.children[activeIndex];
    if (nextPanelEl) {
      nextPanelEl.ariaHidden = 'false';
      nextPanelEl.style.setProperty('visibility', 'visible');
      // this eliminates a flicker if there's only 1 subnav rendering
      if (activeIndex === 0) {
        fadeDelay = 0;
        fadeDuration = 0;
      }
      nextPanelEl.animate([{ opacity: '0' }, { opacity: '1' }], {
        delay: fadeDelay,
        duration: fadeDuration,
        fill: 'forwards',
      });
    }
  }
}
