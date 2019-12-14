const template = document.createElement("template");
const baseUrl = import.meta.url.split("/").slice(0, -1).join("/");

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

  img {
    display: block;
  }
</style>
<img src="${baseUrl}/noop.png" width="853" height="480" />
`;

window.customElements.define("anm-noop", AnimemeNoopElement);

