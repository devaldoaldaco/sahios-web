import { LitElement, html, css } from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement('sahios-sidebar')
export class SahiosSidebar extends LitElement {
  @property({ type: String }) active = 'inicio';

  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      background: var(--sahios-web-background-color, rgb(8,11,36));
      color: white;
    }

    .top-section {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: calc(100% - 2rem);
      padding: 0px 1rem;
      height: 80px;
    }

    #logo {
      height: 60px;
      width: 150px;
    }

    button {
      background: transparent;
      border: none;
      padding: 0;
    }

    img {
      height: 20px;
      width: 20px;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 1rem 0;
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
      line-height: 1.3rem;
    }

    li:hover {
      color: #46F68A;
      cursor: pointer;
    }

    @media screen and (min-width: 562px) {
      .top-section {
        width: calc(100% - 8rem);
        padding: 0px 4rem;
      }
    }

    @media screen and (min-width: 794px) {
      li {
        font-size: 0.9rem;
      }
    }

    @media screen and (min-width: 1024px)  {
      li {
        letter-spacing: 0.03rem;
      }
    }

    @media screen and (min-width: 1201px)  {
      .top-section {
        width: calc(100% - 12rem);
        padding: 0px 6rem;
      }
    }

    @media screen and (min-width: 1400px) {
      .top-section {
        width: calc(100% - 22rem);
        padding: 0px 11rem;
      }
    }
  `;

  _handleCloseMenu() {
    this.dispatchEvent(new CustomEvent('sahios-sidebar-close-clicked', {bubbles: true, composed: true, detail: true}));
  }


  render() {
    return html`
      <section class="top-section">
        <button @click="${this._handleCloseMenu}">
          <img src="../../../assets/icon-close.svg" alt="Icon close">
        </button>
      </section>
      <section class="bottom-section">
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Servicios</li>
            <li>Acerca de nosotros</li>
          </ul>
        </nav>
      </section>
    `;
  }
}
