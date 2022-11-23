import Component from '@glimmer/component';

export default class DocWcagListComponent extends Component {
  criteria = [
    {
      type: 'tags',
      id: 'wcag-1-1-1',
      attributes: {
        html: '<p>Non-text Content (Level A)</p>',
        content: 'Non-text Content (Level A)',
        title: 'WCAG 1.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-1',
      attributes: {
        html: '<p>Guideline 1.1 Text Alternatives</p>',
        content: 'Guideline 1.1 Text Alternatives',
        title: 'WCAG 1.1',
        url: 'https://www.w3.org/TR/WCAG21/#text-alternatives',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-1',
      attributes: {
        html: '',
        content: '',
        title: 'WCAG 1.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-2',
      attributes: {
        html: '<p>Prerecorded Captions (Level A)</p>',
        content: 'Prerecorded Captions (Level A)',
        title: 'WCAG 1.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-3',
      attributes: {
        html: '<p>Audio Description or Media Alternative (Level A)</p>',
        content: 'Audio Description or Media Alternative (Level A)',
        title: 'WCAG 1.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-4',
      attributes: {
        html: '<p>Live Captions (Level AA)</p>',
        content: 'Live Captions (Level AA)',
        title: 'WCAG 1.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-5',
      attributes: {
        html: '<p>Prerecorded Media Audio Description (Level AA)</p>',
        content: 'Prerecorded Media Audio Description (Level AA)',
        title: 'WCAG 1.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-6',
      attributes: {
        html: '<p>Prerecorded Media Sign Language (Level AAA)</p>',
        content: 'Prerecorded Media Sign Language (Level AAA)',
        title: 'WCAG 1.2.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-7',
      attributes: {
        html: '<p>Prerecorded Media Extended Audio Description (Level AAA)</p>',
        content: 'Prerecorded Media Extended Audio Description (Level AAA)',
        title: 'WCAG 1.2.7',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-8',
      attributes: {
        html: '<p>Prerecorded Media Alternative (Level AAA)</p>',
        content: 'Prerecorded Media Alternative (Level AAA)',
        title: 'WCAG 1.2.8',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2-9',
      attributes: {
        html: '<p>Live Media Audio Only (Level AAA)</p>',
        content: 'Live Media Audio Only (Level AAA)',
        title: 'WCAG 1.2.9',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-2',
      attributes: {
        html: '<p>Time-based Media</p>',
        content: 'Time-based Media',
        title: 'WCAG 1.2',
        url: 'https://www.w3.org/TR/WCAG21/#time-based-media',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3-1',
      attributes: {
        html: '<p>Info and Relationships (Level A)</p>',
        content: 'Info and Relationships (Level A)',
        title: 'WCAG 1.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3-2',
      attributes: {
        html: '<p>Meaningful Sequence (Level A)</p>',
        content: 'Meaningful Sequence (Level A)',
        title: 'WCAG 1.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3-3',
      attributes: {
        html: '<p>Sensory Characteristics (Level A)</p>',
        content: 'Sensory Characteristics (Level A)',
        title: 'WCAG 1.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3-4',
      attributes: {
        html: '<p>Orientation (Level AA)</p>',
        content: 'Orientation (Level AA)',
        title: 'WCAG 1.3.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3-5',
      attributes: {
        html: '<p>Identify Input Purpose (Level AA)</p>',
        content: 'Identify Input Purpose (Level AA)',
        title: 'WCAG 1.3.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3-6',
      attributes: {
        html: '<p>Identify Purpose (Level AAA)</p>',
        content: 'Identify Purpose (Level AAA)',
        title: 'WCAG 1.3.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-3',
      attributes: {
        html: '<p>WCAG Guideline - Adaptable</p>',
        content: 'WCAG Guideline - Adaptable',
        title: 'WCAG 1.3',
        url: 'https://www.w3.org/TR/WCAG21/#adaptable',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-1',
      attributes: {
        html: '<p>Use of Color (Level A)</p>',
        content: 'Use of Color (Level A)',
        title: 'WCAG 1.4.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-10',
      attributes: {
        html: '<p>Reflow (Level AA)</p>',
        content: 'Reflow (Level AA)',
        title: 'WCAG 1.4.10',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-11',
      attributes: {
        html: '<p>Non-text Contrast (Level AA)</p>',
        content: 'Non-text Contrast (Level AA)',
        title: 'WCAG 1.4.11',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-12',
      attributes: {
        html: '<p>Text Spacing (Level AA)</p>',
        content: 'Text Spacing (Level AA)',
        title: 'WCAG 1.4.12',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-13',
      attributes: {
        html: '<p>Content on Hover or Focus (Level AA)</p>',
        content: 'Content on Hover or Focus (Level AA)',
        title: 'WCAG 1.4.13',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-2',
      attributes: {
        html: '<p>Audio Control (Level A)</p>',
        content: 'Audio Control (Level A)',
        title: 'WCAG 1.4.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-3',
      attributes: {
        html: '<p>Minimum Contrast (Level AA)</p>',
        content: 'Minimum Contrast (Level AA)',
        title: 'WCAG 1.4.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-4',
      attributes: {
        html: '<p>Resize Text (Level AA)</p>',
        content: 'Resize Text (Level AA)',
        title: 'WCAG 1.4.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-5',
      attributes: {
        html: '<p>Images of Text (Level AA)</p>',
        content: 'Images of Text (Level AA)',
        title: 'WCAG 1.4.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-6',
      attributes: {
        html: '<p>Enhanced Contrast (Level AAA)</p>',
        content: 'Enhanced Contrast (Level AAA)',
        title: 'WCAG 1.4.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-7',
      attributes: {
        html: '<p>Low or No Background Audio (Level AAA)</p>',
        content: 'Low or No Background Audio (Level AAA)',
        title: 'WCAG 1.4.7',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-8',
      attributes: {
        html: '<p>Visual Presentation (Level AAA)</p>',
        content: 'Visual Presentation (Level AAA)',
        title: 'WCAG 1.4.8',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4-9',
      attributes: {
        html: '<p>Images of Text (Level AAA)</p>',
        content: 'Images of Text (Level AAA)',
        title: 'WCAG 1.4.9',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-1-4',
      attributes: {
        html: '<p>Guideline - Distinguishable</p>',
        content: 'Guideline - Distinguishable',
        title: 'WCAG 1.4',
        url: 'https://www.w3.org/TR/WCAG21/#distinguishable',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-1-1',
      attributes: {
        html: '<p>Keyboard (Level A)</p>',
        content: 'Keyboard (Level A)',
        title: 'WCAG 2.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-1-2',
      attributes: {
        html: '<p>No Keyboard Trap (Level A)</p>',
        content: 'No Keyboard Trap (Level A)',
        title: 'WCAG 2.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-1-3',
      attributes: {
        html: '<p>Keyboard (Level AAA)</p>',
        content: 'Keyboard (Level AAA)',
        title: 'WCAG 2.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-1-4',
      attributes: {
        html: '<p>Character Key Shortcuts (Level A)</p>',
        content: 'Character Key Shortcuts (Level A)',
        title: 'WCAG 2.1.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-1',
      attributes: {
        html: '<p>Keyboard Accessible</p>',
        content: 'Keyboard Accessible',
        title: 'WCAG 2.1',
        url: 'https://www.w3.org/TR/WCAG21/#keyboard-accessible',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2-1',
      attributes: {
        html: '<p>Timing Adjustable (Level A)</p>',
        content: 'Timing Adjustable (Level A)',
        title: 'WCAG 2.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2-2',
      attributes: {
        html: '<p>Pause, Stop, Hide (Level A)</p>',
        content: 'Pause, Stop, Hide (Level A)',
        title: 'WCAG 2.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2-3',
      attributes: {
        html: '<p>No Timing (Level AAA)</p>',
        content: 'No Timing (Level AAA)',
        title: 'WCAG 2.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2-4',
      attributes: {
        html: '<p>Interruptions (Level AAA)</p>',
        content: 'Interruptions (Level AAA)',
        title: 'WCAG 2.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2-5',
      attributes: {
        html: '<p>Re-authenticating (Level AAA)</p>',
        content: 'Re-authenticating (Level AAA)',
        title: 'WCAG 2.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2-6',
      attributes: {
        html: '<p>Timeouts (Level AAA)</p>',
        content: 'Timeouts (Level AAA)',
        title: 'WCAG 2.2.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-2',
      attributes: {
        html: '<p>Enough Time</p>',
        content: 'Enough Time',
        title: 'WCAG 2.2',
        url: 'https://www.w3.org/TR/WCAG21/#enough-time',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-3-1',
      attributes: {
        html: '<p>Three Flashes or Below Threshold (Level A)</p>',
        content: 'Three Flashes or Below Threshold (Level A)',
        title: 'WCAG 2.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-3-2',
      attributes: {
        html: '<p>Three Flashes (Level AAA)</p>',
        content: 'Three Flashes (Level AAA)',
        title: 'WCAG 2.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-3-3',
      attributes: {
        html: '<p>Animation from Interactions (Level AAA)</p>',
        content: 'Animation from Interactions (Level AAA)',
        title: 'WCAG 2.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-3',
      attributes: {
        html: '<p>Seizures and Physical Reactions</p>',
        content: 'Seizures and Physical Reactions',
        title: 'WCAG 2.3',
        url: 'https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-1',
      attributes: {
        html: '<p>Bypass Blocks</p>',
        content: 'Bypass Blocks',
        title: 'WCAG 2.4.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-10',
      attributes: {
        html: '<p>Section Headings (Level AAA)</p>',
        content: 'Section Headings (Level AAA)',
        title: 'WCAG 2.4.10',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-2',
      attributes: {
        html: '<p>Page Titled (Level A)</p>',
        content: 'Page Titled (Level A)',
        title: 'WCAG 2.4.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-3',
      attributes: {
        html: '<p>Focus Order (Level A)</p>',
        content: 'Focus Order (Level A)',
        title: 'WCAG 2.4.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-4',
      attributes: {
        html: '<p>Link Purpose In Context (Level A)</p>',
        content: 'Link Purpose In Context (Level A)',
        title: 'WCAG 2.4.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-5',
      attributes: {
        html: '<p>Multiple Ways (Level AA)</p>',
        content: 'Multiple Ways (Level AA)',
        title: 'WCAG 2.4.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-6',
      attributes: {
        html: '<p>Headings and Labels (Level AA)</p>',
        content: 'Headings and Labels (Level AA)',
        title: 'WCAG 2.4.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-7',
      attributes: {
        html: '<p>Focus Visible (Level AA)</p>',
        content: 'Focus Visible (Level AA)',
        title: 'WCAG 2.4.7',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-8',
      attributes: {
        html: '<p>Location (Level AAA)</p>',
        content: 'Location (Level AAA)',
        title: 'WCAG 2.4.8',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4-9',
      attributes: {
        html: '<p>Link Purpose, Link Only (Level AAA)</p>',
        content: 'Link Purpose, Link Only (Level AAA)',
        title: 'WCAG 2.4.9',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-4',
      attributes: {
        html: '<p>Navigable: Provide ways to help users navigate, find content, and determine where they are.</p>',
        content:
          'Navigable: Provide ways to help users navigate, find content, and determine where they are.',
        title: 'WCAG 2.4',
        url: 'https://www.w3.org/TR/WCAG21/#navigable',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5-1',
      attributes: {
        html: '<p>Pointer Gestures (Level A)</p>',
        content: 'Pointer Gestures (Level A)',
        title: 'WCAG 2.5.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5-2',
      attributes: {
        html: '<p>Pointer Gestures</p>',
        content: 'Pointer Gestures',
        title: 'WCAG 2.5.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5-3',
      attributes: {
        html: '<p>Label in Name</p>',
        content: 'Label in Name',
        title: 'WCAG 2.5.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5-4',
      attributes: {
        html: '<p>Motion Actuation</p>',
        content: 'Motion Actuation',
        title: 'WCAG 2.5.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5-5',
      attributes: {
        html: '<p>Target Size</p>',
        content: 'Target Size',
        title: 'WCAG 2.5.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5-6',
      attributes: {
        html: '<p>Concurrent Input Mechanisms</p>',
        content: 'Concurrent Input Mechanisms',
        title: 'WCAG 2.5.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-2-5',
      attributes: {
        html: '<p>Input Modalities: Make it easier for users to operate functionality through various inputs beyond keyboard.</p>',
        content:
          'Input Modalities: Make it easier for users to operate functionality through various inputs beyond keyboard.',
        title: 'WCAG 2.5',
        url: 'https://www.w3.org/TR/WCAG21/#input-modalities',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1-1',
      attributes: {
        html: '<p>Language of Page (Level A)</p>',
        content: 'Language of Page (Level A)',
        title: 'WCAG 3.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1-2',
      attributes: {
        html: '<p>Language of Parts (Level AA)</p>',
        content: 'Language of Parts (Level AA)',
        title: 'WCAG 3.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1-3',
      attributes: {
        html: '<p>Unusual Words (Level AAA)</p>',
        content: 'Unusual Words (Level AAA)',
        title: 'WCAG 3.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1-4',
      attributes: {
        html: '<p>Abbreviations (Level AAA)</p>',
        content: 'Abbreviations (Level AAA)',
        title: 'WCAG 3.1.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1-5',
      attributes: {
        html: '<p>Reading Level (Level AAA)</p>',
        content: 'Reading Level (Level AAA)',
        title: 'WCAG 3.1.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1-6',
      attributes: {
        html: '<p>Pronunciation (Level AAA)</p>',
        content: 'Pronunciation (Level AAA)',
        title: 'WCAG 3.1.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-1',
      attributes: {
        html: '<p>Readable</p>',
        content: 'Readable',
        title: 'WCAG 3.1',
        url: 'https://www.w3.org/TR/WCAG21/#readable',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-2-1',
      attributes: {
        html: '<p>On Focus (Level A)</p>',
        content: 'On Focus (Level A)',
        title: 'WCAG 3.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-2-2',
      attributes: {
        html: '<p>On Input (Level A)</p>',
        content: 'On Input (Level A)',
        title: 'WCAG 3.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-2-3',
      attributes: {
        html: '<p>Consistent Navigation (Level AA)</p>',
        content: 'Consistent Navigation (Level AA)',
        title: 'WCAG 3.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-2-4',
      attributes: {
        html: '<p>Consistent Identification (Level AA)</p>',
        content: 'Consistent Identification (Level AA)',
        title: 'WCAG 3.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-2-5',
      attributes: {
        html: '<p>Change on Request (Level AAA)</p>',
        content: 'Change on Request (Level AAA)',
        title: 'WCAG 3.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-2',
      attributes: {
        html: '<p>Predictable</p>',
        content: 'Predictable',
        title: 'WCAG 3.2',
        url: 'https://www.w3.org/TR/WCAG21/#predictable',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3-1',
      attributes: {
        html: '<p>Error Identification (Level A)</p>',
        content: 'Error Identification (Level A)',
        title: 'WCAG 3.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3-2',
      attributes: {
        html: '<p>Labels or Instructions (Level A)</p>',
        content: 'Labels or Instructions (Level A)',
        title: 'WCAG 3.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3-3',
      attributes: {
        html: '<p>Error Suggestion (Level AA)</p>',
        content: 'Error Suggestion (Level AA)',
        title: 'WCAG 3.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3-4',
      attributes: {
        html: '<p>Error Prevention (Legal, Financial, Data) (Level AA)</p>',
        content: 'Error Prevention (Legal, Financial, Data) (Level AA)',
        title: 'WCAG 3.3.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3-5',
      attributes: {
        html: '<p>Help (Level AAA)</p>',
        content: 'Help (Level AAA)',
        title: 'WCAG 3.3.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3-6',
      attributes: {
        html: '<p>Error Prevention (All) (Level AAA)</p>',
        content: 'Error Prevention (All) (Level AAA)',
        title: 'WCAG 3.3.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html',
        level: 'AAA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-3-3',
      attributes: {
        html: '<p>Input Assistance</p>',
        content: 'Input Assistance',
        title: 'WCAG 3.3',
        url: 'https://www.w3.org/TR/WCAG21/#input-assistance',
      },
    },
    {
      type: 'tags',
      id: 'wcag-4-1-1',
      attributes: {
        html: '<p>Parsing (Level A)</p>',
        content: 'Parsing (Level A)',
        title: 'WCAG 4.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-4-1-2',
      attributes: {
        html: '<p>Name, Role, Value (Level A)</p>',
        content: 'Name, Role, Value (Level A)',
        title: 'WCAG 4.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html',
        level: 'A',
      },
    },
    {
      type: 'tags',
      id: 'wcag-4-1-3',
      attributes: {
        html: '<p>Status Messages (Level AA)</p>',
        content: 'Status Messages (Level AA)',
        title: 'WCAG 4.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html',
        level: 'AA',
      },
    },
    {
      type: 'tags',
      id: 'wcag-4-1',
      attributes: {
        html: '<p>Compatible</p>',
        content: 'Compatible',
        title: 'WCAG 4.1',
        url: 'https://www.w3.org/TR/WCAG21/#compatible',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-1',
      attributes: {
        html: '<p>Interpreting Normative Requirements</p>',
        content: 'Interpreting Normative Requirements',
        title: 'WCAG 5.1',
        url: 'https://www.w3.org/TR/WCAG21/#interpreting-normative-requirements',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-2-1',
      attributes: {
        html: '<p>Conformance Level</p>',
        content: 'Conformance Level',
        title: 'WCAG 5.2.1',
        url: 'https://www.w3.org/TR/WCAG21/#cc1',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-2-2',
      attributes: {
        html: '<p>Full pages</p>',
        content: 'Full pages',
        title: 'WCAG 5.2.2',
        url: 'https://www.w3.org/TR/WCAG21/#cc2',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-2-3',
      attributes: {
        html: '<p>Complete processes</p>',
        content: 'Complete processes',
        title: 'WCAG 5.2.3',
        url: 'https://www.w3.org/TR/WCAG21/#cc3',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-2-4',
      attributes: {
        html: '<p>Only Accessibility-Supported Ways of Using Technologies</p>',
        content: 'Only Accessibility-Supported Ways of Using Technologies',
        title: 'WCAG 5.2.4',
        url: 'https://www.w3.org/TR/WCAG21/#cc4',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-2-5',
      attributes: {
        html: '<p>Non-Interference</p>',
        content: 'Non-Interference',
        title: 'WCAG 5.2.5',
        url: 'https://www.w3.org/TR/WCAG21/#cc5',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-2',
      attributes: {
        html: '<p>Conformance Requirements</p>',
        content: 'Conformance Requirements',
        title: 'WCAG 5.2',
        url: 'https://www.w3.org/TR/WCAG21/#conformance-reqs',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-3-1',
      attributes: {
        html: '<p>Required Components of a Conformance Claim</p>',
        content: 'Required Components of a Conformance Claim',
        title: 'WCAG 5.3.1',
        url: 'https://www.w3.org/TR/WCAG21/#conformance-required',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-3-2',
      attributes: {
        html: '<p>Optional Components of a Conformance Claim</p>',
        content: 'Optional Components of a Conformance Claim',
        title: 'WCAG 5.3.2',
        url: 'https://www.w3.org/TR/WCAG21/#conformance-optional',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-3',
      attributes: {
        html: '<p>Conformance Claims (Optional)</p>',
        content: 'Conformance Claims (Optional)',
        title: 'WCAG 5.3',
        url: 'https://www.w3.org/TR/WCAG21/#conformance-claims',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-4',
      attributes: {
        html: '<p>Statement of Partial Conformance - Third Party Content</p>',
        content: 'Statement of Partial Conformance - Third Party Content',
        title: 'WCAG 5.4',
        url: 'https://www.w3.org/TR/WCAG21/#conformance-partial',
      },
    },
    {
      type: 'tags',
      id: 'wcag-5-5',
      attributes: {
        html: '<p>Statement of Partial Conformance - Language</p>',
        content: 'Statement of Partial Conformance - Language',
        title: 'WCAG 5.5',
        url: 'https://www.w3.org/TR/WCAG21/#conformance-partial-lang',
      },
    },
  ];
}
