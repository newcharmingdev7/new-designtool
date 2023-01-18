## Semantic tokens

### Foreground

Use for text and icons.

<div class="dummy-colors-list">
  {{#each this.colors.semantic.foreground as |color|}}
    <Doc::ColorSwatch @color={{color}} />
  {{else}}
    <p class="dummy-paragraph">No tokens found for "semantic/foreground" colors 🤷‍♀️</p>
  {{/each}}
</div>

### Surface

Use for container and component backgrounds.

<div class="dummy-colors-list">
  {{#each this.colors.semantic.surface as |color|}}
    <Doc::ColorSwatch @color={{color}} />
  {{else}}
    <p class="dummy-paragraph">No tokens found for "semantic/surface" colors 🤷‍♀️</p>
  {{/each}}
</div>

### Border

Use for container and component borders. Neutral values can also be used for horizontal rules.

<div class="dummy-colors-list">
  {{#each this.colors.semantic.border as |color|}}
    <Doc::ColorSwatch @color={{color}} />
  {{else}}
    <p class="dummy-paragraph">No tokens found for “semantic/border” colors.</p>
  {{/each}}
</div>

### Focus

Use to indicate an element is in a focused state. Use critical values for critical actions only and action values for everything else. 

!!! Info

These are primarily used internally by the design system’s team to define focus states.
!!!

<div class="dummy-colors-list">
  {{#each this.colors.semantic.focus as |color|}}
    <Doc::ColorSwatch @color={{color}} />
  {{else}}
    <p class="dummy-paragraph">No tokens found for “semantic/focus” colors.</p>
  {{/each}}
</div>

### Page

Use for page backgrounds.

<div class="dummy-colors-list">
  {{#each this.colors.semantic.page as |color|}}
    <Doc::ColorSwatch @color={{color}} />
  {{else}}
    <p class="dummy-paragraph">No tokens found for “semantic/page” colors.</p>
  {{/each}}
</div>

## Brand colors

{{#each-in this.colors.branding as |brand colorsList|}}
    <h3>{{capitalize brand}}</h3>
    <div class="dummy-colors-list">
      {{#each colorsList as |color|}}
        <Doc::ColorSwatch @color={{color}} />
      {{/each}}
    </div>
{{else}}
    <p class="dummy-paragraph">No tokens found for “branding” colors.</p>
{{/each-in}}

## Core palette

Core palette colors should be used sparingly and only when the correct semantic mapping isn’t available for the use case.

{{#each-in this.colors.palette as |tone colorsList|}}
    <h3>{{capitalize tone}}</h3>
    <div class="dummy-colors-list">
      {{#each colorsList as |color|}}
        <Doc::ColorSwatch @color={{color}} />
      {{/each}}
    </div>
{{else}}
    <p class="dummy-paragraph">No tokens found for “palette” colors.</p>
{{/each-in}}
