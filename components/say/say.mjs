const template = document.createElement("template");

/**
 * The Animeme say statement.
 * This statement allows the program to print text to stdout.
 *
 * There is one slot: the default slot.
 * It is rendered as a subtitle to the frame.
 */
export default class AnimemeSayElement extends HTMLElement {
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

  #text {
    display: block;
    position: absolute;
    bottom: 22px;
    text-align: center;
    width: 100%;
  }
</style>
<img src="../resources/statements/say/say.png" width="853" height="480" />
<slot id="text"></slot>
`;

window.customElements.define("anm-say", AnimemeSayElement);

