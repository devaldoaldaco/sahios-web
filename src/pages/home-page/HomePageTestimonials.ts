import { LitElement, html, css } from "lit";
import {customElement} from "lit/decorators.js";

@customElement('home-page-testimonials')
export class HomePageTestimonials extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: auto;
      width: 100%;
      color: white;
    }

    img {
      border-radius: 50%;
      height: 5.5rem;
      width: 5.5rem;
    }

    h1 {
      max-width: 31.25rem;
      margin: 0 auto;
      font-size: 1.75rem;
      padding: 3rem 1rem 2rem;
    }

    p {
      max-width: 50.25rem;
      margin: 0 auto 2rem;
      font-size: 1rem;
      padding: 0 1rem;
      letter-spacing: 0.01rem;
      line-height: 1.25rem;
    }

    main.container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 70rem;
      margin: 0 auto;
      padding-bottom: 2rem;
    }

    article {
      border-radius: 2rem;
      color: white;
      height: 256px;
      width: 256px;
      min-width: 256px;
      background: linear-gradient(to bottom, #1B6890, #0E092B);
      padding: 1rem;
      margin: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    article:nth-child(2), article:nth-child(3) {
      background: #0F1330;
    }

    article h3 {
      margin: 0;
      font-size: 1.2rem;
      letter-spacing: 0.02rem;
      font-weight: 500;
    }

    article span {
      color: #46F68A;
      font-size: 0.7rem;
    }

    article p {
      margin: 0.5rem 0 0;
      padding: 0;
      font-size: 0.8rem;
      font-weight: 300;
      line-height: 0.9rem;
      letter-spacing: 0.01rem;
    }

    .legend {
      font-size: 0.8rem;
      margin-bottom: 2rem;
    }

    .legend b {
      font-size: 0.9rem;
      color: #05F5FF;
    }

    @media screen and (max-width: 345px) {
    }

    @media screen and (min-width: 380px) {
    }

    @media screen and (min-width: 461px) {
    }

    @media screen and (min-width: 562px) {
      main.container {
        padding: 0 2rem;
        flex-direction: row;
        gap: 2rem;
      }

      article {
        margin: 0;
      }
    }

    @media screen and (min-width: 764px) {
      main.container {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
    }

    @media screen and (max-width: 982px) {
    }

    @media screen and (min-width: 983px) {
    }

    @media screen and (max-width: 1053px) {
    }

    @media screen and (min-width: 1054px) {
      main.container {
        gap: 3rem;
      }
    }

    @media screen and (min-width: 1201px) {
      main.container {
        margin-top: 5rem;
        margin-bottom: 5rem;
        gap: 4rem;
      }
    }

    @media screen and (min-width: 1400px) {
      main.container {
        gap: 6rem;
      }
    }
  `;

  render() {
    return html`
      <h1>
        Testimonio de nuestros clientes
      </h1>
      <p>
        Creemos que la mejor forma de medir el exito es escuchar la opinion de aquellos que han confiado en nosotros
      </p>
      <main class="container">
        <article>
          <img src="../../../assets/aldo.jpg" alt="Aldo">
          <div>
            <h3>Aldo Aldaco</h3>
            <span>Cliente 2021</span>
          </div>
          <p>Estuvo muy chido el servicio, son super profesionales y a tiempo. excelente servicio 5 estrellas</p>
        </article>
        <article>
          <img src="../../../assets/aldo.jpg" alt="Aldo">
          <div>
            <h3>Aldo Aldaco</h3>
            <span>Cliente 2021</span>
          </div>
          <p>Estuvo muy chido el servicio, son super profesionales y a tiempo. excelente servicio 5 estrellas</p>
        </article>
        <article>
          <img src="../../../assets/aldo.jpg" alt="Aldo">
          <div>
            <h3>Aldo Aldaco</h3>
            <span>Cliente 2021</span>
          </div>
          <p>Estuvo muy chido el servicio, son super profesionales y a tiempo. excelente servicio 5 estrellas</p>
        </article>
      </main>
      <p class="legend">* información obtenida de <b>Google Maps</b></p>

    `;
  }
}
