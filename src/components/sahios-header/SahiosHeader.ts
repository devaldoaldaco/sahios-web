import { LitElement, html, css } from "lit";
import {customElement} from "lit/decorators.js";

@customElement('sahios-header')
export class SahiosHeader extends LitElement {

  static styles = css`
    :host {
      display: block;
      height: 80px;
      width: 100%;
      background: #080D25;
    }

    header {
      height: 100%;
      width: calc(100% - 1rem);
      padding: 0px 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #logo {
      height: 60px;
      width: 150px;
    }

    nav {
      display: none;
    }

    li.active {
      color: #46F68A;
    }

    button {
      background: transparent;
      border: none;
      padding: 0;
    }

    #menu {
      height: 12px;
      width: 44px;
    }

    @media screen and (min-width: 562px) {
      header {
        height: 100%;
        width: calc(100% - 6rem);
        padding: 0px 3rem;
      }
    }

    @media screen and (min-width: 794px) {
      nav {
        display: block;
        min-width: 500px;
        color: white;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
      }

      li {
        font-size: 0.9rem;
      }

      button {
        display: none;
      }
    }
  `;

  clickMenu() {
    console.log('Show menu')
    this.dispatchEvent(new CustomEvent('sahios-header-menu-clicked', {
      bubbles: true,
      composed: true,
      detail: true
    }));
  }

  render() {
    return html`
        <header>
          <img id="logo" src="../../../assets/logo-horizontal-blanco.svg" alt="Logo" />
          <nav>
            <ul>
              <li class="active">Inicio</li>
              <li>Productos</li>
              <li>Servicios</li>
              <li>Acerca de nosotros</li>
            </ul>
          </nav>
          <button @click="${this.clickMenu}">
            <img id="menu" src="../../../assets/menu-hamburguesa.svg" alt="Menu hamburguesa" />
          </button>
        </header>
    `;
  }
}
