const template = document.createElement("template");

/**
 * The Animeme noop statement.
 * This statement is a no-op.
 *
 * Child elements are ignored.
 */
export default class AnimemeNoopElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(document.importNode(template.content, true));
  }
}

template.innerHTML = `
<style>
  :host {
    display: inline-block;
    position: relative;
    width: 853px;
    height: 480px;
  }
</style>
<img src="../resources/statements/noop/noop.png" width="853" height="480" />
`;

window.customElements.define("anm-noop", AnimemeNoopElement);

