import { LitElement, html, css } from "lit";
import {customElement} from "lit/decorators.js";

@customElement('sahios-button')
export class SahiosButton extends LitElement {

  render() {
    return html`
      <button>HOLA</button>
    `;
  }
}
