import { LitElement, html, css, svg } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-header/SahiosHeader';
import '../../components/sahios-form/SahiosForm';

@customElement('home-page')
export class HomePage extends LitElement {
  @property({ type: String }) title = 'Home';
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    main {
      min-height: calc(100% - 5rem);
      background: rgb(8,11,36);
      background: linear-gradient(150deg, rgb(8, 11, 36) 20%, rgb(11, 74, 93) 73%);
      color: white;
      text-align: left;
      overflow: hidden;
      display: flex;
    }

    h1 {
      max-width: 31.25rem;
      margin: 0;
      font-size: 2.188rem;
      padding: 3rem 1rem 1rem;
    }

    b {
      color: #46F68A;
    }

    p {
      max-width: 37.5rem;
      margin: 0;
      font-size: 1rem;
      padding: 1rem;
      letter-spacing: 0.01rem;
      line-height: 1.25rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 1rem;
    }



    button {
      height: 3.125rem;
      width: 12.688rem;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 0.313rem;
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
      border: 0.063rem solid #46F68A;
    }

    img.first {
      width: 65%;
      position: absolute;
      bottom: 0;
      right: 0;
      display: none;
    }

    img.second {
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .left-section, .right-section {
      z-index: 1;
    }

    .right-section {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: 345px) {
      div {
        flex-direction: column;
      }

      button.secundary {
        margin-top: 2rem;
      }
    }

    @media screen and (min-width: 346px) {
      div {
        flex-direction: column;
      }

      button.secundary {
        margin-top: 2rem;
      }
    }

    @media screen and (min-width: 380px) {
    }

    @media screen and (min-width: 461px) {
      div {
        width: 25.5rem;
      }
    }

    @media screen and (min-width: 502px) {
      div {
        width: 26.5rem;
        flex-direction: row;
        margin: 0 auto;
      }

      button.secundary {
        margin-top: 0;
      }
    }

    @media screen and (min-width: 562px) {
      h1 {
        max-width: 35.25rem;
        font-size: 2.813rem;
        padding: 5rem 3rem 1.5rem;
      }

      p {
        max-width: 34.375rem;
        padding: 1.5rem 3rem;
        font-size: 1.563rem;
        letter-spacing: 0.05rem;
        line-height: 1.563rem;
      }

      div {
        padding: 1.5rem 3rem;
      }

      img.first {
        display: block;
        width: 85%;
      }

      img.second {
        display: none;
      }
    }

    @media screen and (min-width: 850px) {
      div {
        margin: 0;
      }
    }


    @media screen and (min-width: 932px) {
      div {
        width: 26.5rem;
        flex-direction: row;
      }

      button.secundary {
        margin-top: 0;
        margin-left: 1rem;
      }

      img.first {
        display: block;
        width: 80%;
      }
    }

    @media screen and (max-width: 982px) {
      sahios-form {
        display: none;
      }
    }

    @media screen and (min-width: 983px) {
      img.second {
        display: none;
      }
    }

    @media screen and (min-width: 1024px) {
      img.first {
        width: 60%;
      }

      .left-section, .right-section {
        width: 50%;
      }

      .left-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      h1 {
        padding-top: 0;
      }
    }

    @media screen and (max-width: 1054px) {

    }

    @media screen and (min-width: 1201px) {
      h1 {
        padding: 0 5rem 1.5rem;
      }

      p {
        padding: 1.5rem 5rem 1.5rem;
      }

      div {
        padding: 1.5rem 5rem 1.5rem;
      }

      .left-section {
        width: 50%;
      }

      .right-section {
        width: 50%;
      }
    }

    @media screen and (min-width: 1400px) {
      h1, p, div {
        padding-left: 10rem;
      }

      h1 {
        max-width: 45rem;
      }

      p {
        max-width: 45rem;
      }

      img.first {
        width: 52%;
      }

      .left-section {
        width: 60%;
      }

      .right-section {
        width: 40%;
        justify-content: start;
      }
    }
  `;

  render() {
    return html`
        <main>
          <section class="left-section">
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
          </section>
          <section class="right-section">
            <sahios-form></sahios-form>
          </section>
        </main>
        <img class="first" src="../../../assets/background-home-desktop.svg" alt="Home image">
        <img class="second" src="../../../assets/background-home-mobile.svg" alt="Home image">
    `;
  }
}
