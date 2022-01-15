import { LitElement, html, css, svg } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-header/SahiosHeader';

const logo = new URL('../../assets/background-home.svg', import.meta.url).href;


@customElement('home-page')
export class HomePage extends LitElement {
  @property({ type: String }) title = 'Home';
  static styles = css`
    :host {
      display: block;
      height: 95vh;
      width: 100%;
    }

    main {
      min-height: calc(100% - 80px);
      background: rgb(8,11,36);
      background: linear-gradient(150deg, rgb(8, 11, 36) 20%, rgb(11, 74, 93) 73%);
      color: white;
      text-align: left;
      overflow-x: hidden;
    }

    h1 {
      max-width: 500px;
      margin: 0;
      font-size: 35px;
      padding: 3rem 1rem 2rem;
    }

    b {
      color: #46F68A;
    }

    p {
      max-width: 600px;
      margin: 0;
      font-size: 16px;
      padding: 0 1rem;
      letter-spacing: 0.01rem;
      line-height: 20px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 1rem;
    }

    button {
      height: 50px;
      width: 155px;
      border-radius: 5px;
      letter-spacing: 0.02rem;
      padding: 0;
    }

    button.primary {
      background: #46F68A;
      color: #080D25;
      border: none;
    }

    button.secundary {
      background: transparent;
      color: white;
      border: 1px solid #46F68A;
    }

    figure {
      display: none;
      margin: 0;
      width: 100%;
      height: 386px;
    }

    img {
      width: 55%;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    @media screen and (max-width: 345px) {
      div {
        flex-direction: column;
      }

      button.secundary {
        margin-top: 2rem;
      }
    }

    @media screen and (min-width: 380px) {
      div {
        width: 350px;
      }
    }

    @media screen and (min-width: 461px) {
      div {
        width: 350px;
      }

    }

    @media screen and (min-width: 562px) {
      h1 {
        max-width: 500px;
        font-size: 45px;
        padding: 5rem 3rem 1.5rem;
      }

      p {
        max-width: 550px;
        padding: 1.5rem 3rem;
        font-size: 25px;
        letter-spacing: 0.05rem;
        line-height: 25px;
      }

      div {
        max-width: 350px;
        padding: 1.5rem 3rem;
      }

      figure {
        display: block;
        height: 350px;
      }

    }
  `;

  render() {
    return html`
        <sahios-header></sahios-header>
        <main>
          <h1>
            Sabemos como <b>tratar</b> a tu aliado del trabajo
          </h1>
          <p>
            Nos especializamos en el cuidado y mantenimiento de equipos de computo
            y telefonía movil, somos expertos en soluciones digitales
          </p>
          <div>
            <button class="primary">Empezar ahora</button>
            <button class="secundary">Contacto</button>
          </div>
          <figure>
            <img src="../../../assets/background-home.svg" alt="Home image">
          </figure>
        </main>
    `;
  }
}
