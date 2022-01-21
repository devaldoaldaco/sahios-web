import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sahios-sidebar')
export class SahiosSidebar extends LitElement {
  static styles = css`

  `;

  render() {
    return html`
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Acerca de nosotros</li>
        </ul>
      </nav>
    `;
  }
}
