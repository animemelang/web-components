const template = document.createElement("template");

/**
 * The Animeme loop statement.
 * This statement represents a loop that iterates
 * until a condition is met.
 *
 * This component accepts two slots: "until" and the unnamed slot.
 * The until slot renders the terminating loop condition.
 * The unnamed slot renders the loop body.
 */
export default class AnimemeLoopElement extends HTMLElement {
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
    position: relative;
    width: 853px;
    flex-direction: column;
  }

  img {
    display: block;
  }

  #loop-begin,
  #loop-end {
    display: inline-block;
    position: relative;
  }

  #until {
    display: inline-block;
    position: absolute;
    top: 132px;
    left: 256px;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
<div id="loop-begin">
  <img src="../resources/statements/loop/loop-begin.png" width="853" height="480" />
  <slot id="until" name="until"></slot>
</div>
<slot id="body"></slot>
<div id="loop-end"><img src="../resources/statements/loop/loop-end.png" width="853" height="480" /></div>
`;

window.customElements.define("anm-loop", AnimemeLoopElement);

