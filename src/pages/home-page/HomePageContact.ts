import {css, html, LitElement} from "lit";
import { customElement } from "lit/decorators.js";

@customElement('home-page-contact')
export class HomePageContact extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #9BA0AA;
      width: 100%;
      color: white;
    }

    h1 {
      max-width: 31.25rem;
      margin: 0;
      font-size: 1.75rem;
      padding: 3rem 1rem 2rem;
      text-align: left;
    }

    p {
      max-width: 37.5rem;
      margin: 0;
      font-size: 1rem;
      padding: 0 1rem 1rem;
      letter-spacing: 0.01rem;
      line-height: 1.25rem;
      text-align: left;
    }

    div {
      margin: 1rem 0 2rem;
    }

    button {
      min-width: calc(100% - 2rem);
      min-height: 3.5rem;
      border-radius: 5px;
      font-size: 0.9rem;
      font-weight: 500;
      margin: 1rem 0;
    }

    button.primary {
      background: white;
      color: #090D2B;
      border: none;
      .anchor {
        text-decoration: none;
      }
    }

    button.primary a {
     color: #090D2B; 
    }

    button.secondary {
      background: transparent;
      color: white;
      border: 1px solid white;
    }

    button.secondary a {
      color: white; 
    }

    .left-section {
      margin-left:10px;
      display: block;
    }

    .anchor {
      text-decoration: none;
      outline: none;
    }

    .right-section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 261px;
      overflow: hidden;
    }

    img {
      height: 260px;
    }

    

    @media screen and (max-width: 345px) {
    }

    @media screen and (min-width: 380px) {
    }

    @media screen and (min-width: 461px) {
    }

    @media screen and (min-width: 562px) {
      h1 {
        padding: 5rem 3rem 1.5rem;
      }

      p {
        max-width: 34.375rem;
        padding: 0.5rem 3rem;
      }

      button {
        min-width: calc(300px - 2rem);
      }

      button.primary {
        margin-right: 0.5rem;
      }

      button.secondary {
        margin-left: 0.5rem;
      }

    }

    @media screen and (min-width: 764px) {
    }

    @media screen and (max-width: 982px) {
    }

    @media screen and (min-width: 983px) {
      :host {
        flex-direction: row;
      }

      .left-section {
        width: 65%;
      }

      .right-section {
        height: 100%;
        width: 35%;
        align-items: center;
      }

      p {
        max-width: 42.5rem;
      }

      button {
        min-width: calc(310px - 2rem);
      }

      button.primary {
        margin-right: 0.5rem;
      }

      button.secondary {
        margin-left: 0.5rem;
      }
    }

    @media screen and (max-width: 1053px) {
    }

    @media screen and (min-width: 1054px) {
      p {
        max-width: 42.5rem;
      }

      div {
        display: flex;
        justify-content: start;
        margin: 0;
        padding: 0 3rem 3rem;
      }

      img {
        height: 280px;
      }
    }

    @media screen and (min-width: 1201px) {
      h1 {
        padding: 5rem 5rem 3rem;
      }

      p {
        padding: 0 5rem 1.5rem 5rem;
      }

      div {
        display: flex;
        justify-content: start;
        margin: 0;
        padding: 0 5rem 3rem;
      }

    }

    @media screen and (min-width: 1400px) {
      h1 {
        padding: 5rem 9rem 2rem;
      }

      p {
        padding: 0 9rem 2rem;
      }

      div {
        display: flex;
        justify-content: start;
        margin: 0;
        padding: 0 9rem 3rem;
      }

      .left-section {
        width: 50%;
      }

    }
  `;

  render() {
    return html`
      <section class="left-section">
        <h1>Contactanos y recibe tu
          servicio personalizado</h1>
        <p>Contáctanos hoy y recibe un servicio completamente personalizado, diseñado para adaptarse a las necesidades específicas de tu proyecto, tus objetivos y tu visión. Analizamos cada detalle para ofrecerte una solución estratégica, moderna y efectiva que te ayude a destacar, optimizar resultados y llevar tu presencia digital al siguiente nivel con el respaldo de un equipo comprometido con tu éxito.</p>

        <div>
          <a class="primary">
            <a class="anchor" href="https://wa.me/5531139589?text=Hola%20quiero%20información">
              Enviar WhatsApp</a>
          </button>
          
          <button class="secondary" aria-label="Llamar al número 2411260175">
            <a class="anchor" href="tel: 2411260175"> Comunicate vía llamada</a>
          </button>
        </div>
      </section>

      <section class="right-section">
          <img src="../../../assets/laidy-contact.svg" alt="Imagen de operadora telefonica">
      </section>
    `;
  }
}
