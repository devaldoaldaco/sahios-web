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
      z-index: 2;
    }

    header {
      height: 100%;
      width: calc(100% - 1rem);
      padding: 0px 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
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

    li {
      font-size: 0.9rem;
      letter-spacing: 0.03rem;
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
        justify-content: space-between;
      }

      li {
        font-size: 0.9rem;
      }

      button {
        display: none;
      }
    }

    @media screen and (min-width: 1024px)  {
      li {
        letter-spacing: 0.03rem;
      }
    }

    @media screen and (min-width: 1201px)  {
      header {
        width: calc(100% - 10rem);
        padding: 0px 5rem;
      }

      nav {
        min-width: 600px;
      }

      li {
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 1400px) {
      header {
        width: calc(100% - 20rem);
        padding: 0px 10rem;
      }
    }
  `;


  _handleMenuClicked(event: MouseEvent) {
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
          <button @click="${this._handleMenuClicked}">
            <img id="menu" src="../../../assets/menu-hamburguesa.svg" alt="Menu hamburguesa" />
          </button>
        </header>
    `;
  }
}
