import { LitElement, html, css } from "lit";
import {customElement} from "lit/decorators.js";

@customElement('home-page-testimonials')
export class HomePageTestimonials extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: auto;
      max-width: 100%;
      color: white;
    }

    span.user-name {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 5rem;
      width: 5rem;
      background-color: #2A2D45;
      text-align: center;
      vertical-align: middle;
      font-size: 2rem;
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

    article:nth-child(1), article:nth-child(3) {
      background: #0F1330;
      display: none;
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

      article:nth-child(1), article:nth-child(3) {
        display: flex;
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
        La mejor forma de medir el éxito es escuchar la opinión de quienes han confiado en nosotros, ya que sus experiencias reflejan el impacto real de nuestro trabajo. ✨
      </p>
      <main class="container">

        <article>
          <span class="user-name">V</span>
          <div>
            <h3>Violeta Garcia</h3>
            <span>Reparación equipo celular</span>
          </div>
          <p>A ojos cerrados recomiendo ampliamente el trabajo tran profesional de Sahios Mantenimiento Software, Hardware ...... en Google busque al mejor y obvio Jmas se equivo en recomendarmelos.</p>
        </article>
        
        <article>
          <span class="user-name">D</span>
          <div>
            <h3>Detzani Perez</h3>
            <span>Mantenimiento preventivo</span>
          </div>
          <p>Elegi las 4 opciones por que para mi son de vital importancia ya que la atención fue una de  las  mejores uno se siente en confianza en dejar su equipo en manos de un experto...</p>
        </article>

        <article>
          <span class="user-name">G</span>
          <div>
            <h3>Gonzalo Hernandez</h3>
            <span>Reparación equipo de computo</span>
          </div>
          <p>Buena atención.</p>
        </article>
        
      </main>
      <p class="legend">* información obtenida de <b>Google Maps</b></p>

    `;
  }
}
