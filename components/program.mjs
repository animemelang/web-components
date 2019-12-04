const template = document.createElement("template");

/**
 * The Animeme program element.
 * This element serves as a root element for all other anm elements.
 *
 * There is one slot: the default slot.
 * Its contents are rendered as a column flex container.
 */
export default class AnimemeProgramElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(document.importNode(template.content, true));
  }
}

template.innerHTML = `
<style>
  :host {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 36px;
    font-family: "DejaVu Sans Mono", Consolas, monospace;
    text-shadow: /* for outline. https://stackoverflow.com/a/8712442 */
      1px 1px 0 black,
      -1px 1px 0 black,
      1px -1px 0 black,
      -1px -1px 0 black,
      0px 1px 0 black,
      0px -1px 0 black,
      -1px 0px 0 black,
      1px 0px 0 black,
      2px 2px 0 black,
      -2px 2px 0 black,
      2px -2px 0 black,
      -2px -2px 0 black,
      0px 2px 0 black,
      0px -2px 0 black,
      -2px 0px 0 black,
      2px 0px 0 black,
      1px 2px 0 black,
      -1px 2px 0 black,
      1px -2px 0 black,
      -1px -2px 0 black,
      2px 1px 0 black,
      -2px 1px 0 black,
      2px -1px 0 black,
      -2px -1px 0 black;
  }
</style>
<slot></slot>
`;

window.customElements.define("anm-program", AnimemeProgramElement);
