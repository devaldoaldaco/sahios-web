import { LitElement, html, css } from "lit";
import {customElement, property} from 'lit/decorators.js';

interface ClassAdd {
    id: String,
    classToString: String
}
@customElement('sahios-header')
export class SahiosHeader extends LitElement {


  @property({ type: Array }) classAdd:ClassAdd[] = [{
    id:'home', 
    classToString: 'active',
  },
  {
    id:'products',
    classToString: 'false'
  },
  {
    id :'service', 
    classToString: 'false'
  },
  {
    id:"about",
    classToString: 'false'
  }];

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


  _changeActive(event: MouseEvent) {
    const target = event.target as HTMLElement;
    this.classAdd = [
      {
        id:'home', 
        classToString: 'false',
      },
      {
        id:'products',
        classToString: 'false'
      },
      {
        id :'service', 
        classToString: 'false'
      },
      {
        id:"about",
        classToString: 'false'
      }
    ];
    this.classAdd.forEach((testing, index) => {
      if(testing.id === target.id) {
        this.classAdd[index].classToString = 'active'
      } else {
        this.classAdd[index].classToString = 'false'
      }
    });
    this.dispatchEvent(new CustomEvent('sahios-change-page-header',{
      bubbles: true,
      composed: true,
      detail: String(target.id)
    }));
  }

  
  render() {
    return html`
        <header>
          <img id="logo" src="../../../assets/logo-horizontal-blanco.svg" alt="Logo" />
          <nav>
            <ul>
              <li class="${this.classAdd.length > 0 ? this.classAdd[0].classToString.toString(): ''}" @click=${this._changeActive} id="home"> Inicio </li>
              <li class="${this.classAdd.length > 0 ? this.classAdd[1].classToString.toString(): ''}" @click=${this._changeActive} id="products"> Productos </li>
              <li class="${this.classAdd.length > 0 ? this.classAdd[2].classToString.toString(): ''}" @click=${this._changeActive} id="service"> Servicios </li>
              <li class="${this.classAdd.length > 0 ? this.classAdd[3].classToString.toString(): ''}" @click=${this._changeActive} id="about"> Acerca de nosotros </li>
            </ul>
          </nav>
          <button @click="${this._handleMenuClicked}">
            <img id="menu" src="../../../assets/menu-hamburguesa.svg" alt="Menu hamburguesa" />
          </button>
        </header>
    `;
  }
}
