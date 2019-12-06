const template = document.createElement("template");

/**
 * The Animeme test condition statement.
 * This statement compares a value against some condition.
 *
 * This component accepts two slots: "value" and "test".
 * The value slot renders the value to compare.
 * The test slot renders the condition.
 */
export default class AnimemeTestElement extends HTMLElement {
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

  #value {
    display: inline-block;
    position: absolute;
    top: 85px;
    left: 645px;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  #test-wrapper {
    display: block;
    position: absolute;
    bottom: 22px;
    text-align: center;
    width: 100%;
  }
</style>
<img src="../resources/statements/test/test.png" width="853" height="480" />
<slot id="value" name="value"></slot>
<div id="test-wrapper">Is this <slot id="test" name="test">a pigeon</slot>?</div>
`;

window.customElements.define("anm-test", AnimemeTestElement);

