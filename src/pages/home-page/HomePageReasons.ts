import { LitElement, html, css } from "lit";
import {customElement} from "lit/decorators.js";

@customElement('home-page-reasons')
export class HomePageReasons extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      color: white;
      text-align: left;
      background: #090D2B;
      display: block;
      position: relative;
    }

    main {
      width: 100%;
      color: white;
      text-align: left;
      background: #090D2B;
      display: block;
    }

    h1 {
      max-width: 31.25rem;
      margin: 0;
      font-size: 1.75rem;
      padding: 3rem 1rem 2rem;
    }

    b {
      color: #46F68A;
    }

    p {
      max-width: 37.5rem;
      margin: 0;
      font-size: 1rem;
      padding: 0 1rem 1rem;
      letter-spacing: 0.01rem;
      line-height: 1.25rem;
    }

    img {
      width: 70%;
    }


    .right-section {
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .reason {
      border-radius: 1rem;
      margin: 2rem auto;
      position: relative;
      width: calc(85% - 2rem);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: rgba(255,255,255,0.06);
      max-width: 44.75rem;
    }

    .icon {
      position: absolute;
      top: -0.75rem;
      left: calc(50% - 0.75rem);
      height: 2rem;
      width: 2rem;
      margin: 0 auto;
    }

    h3 {
      font-size: 1.3rem;
      margin: 0.8rem 0;
    }

    .reason p {
      margin: 0;
      font-size: 0.8rem;
      letter-spacing: 0.02rem;
      line-height: 1rem;
      padding: 0;
    }

    .divider {
      position: relative;
      overflow: hidden;
      padding: 0;
      display: block;
      height: 7rem;
      width: 100%;
      background: #2A2D45;
      background: linear-gradient(to right bottom, #090D2B 50%, #2A2D45 50%);
    }

    .left-rectangle, .right-rectangle {
      height: 1.5rem;
      width: 10rem;
      position: absolute;
      transform: rotateZ(165deg);
    }

    .left-rectangle.green {
      display: none;
    }

    .left-rectangle.blue {
      display: none;
    }

    .right-rectangle.green {
      background: #46F68A;
      bottom: 4rem;
      right: -1rem;
    }

    .right-rectangle.blue {
      background: #05F5FF;
      bottom: 3rem;
      right: -5rem;
    }

    @media screen and (max-width: 345px) {
    }

    @media screen and (min-width: 380px) {
    }

    @media screen and (min-width: 461px) {
      .reason p {
        line-height: 1.25rem;
      }
    }

    @media screen and (min-width: 562px) {
      h1 {
        max-width: 31.25rem;
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

      img {
        width: 60%;
      }

      .reason div {
        padding: 0;
      }

      .left-rectangle.green {
        display: block;
        background: #46F68A;
        bottom: 2rem;
        left: -1rem;
      }

      .left-rectangle.blue {
        display: block;
        background: #05F5FF;
        bottom: 3rem;
        left: -5rem;
      }
    }

    @media screen and (min-width: 764px) {
      img {
        width: 45%;
      }

      h3 {
        margin: 1rem 0;
        font-size: 1.4rem;
      }

      .reason p {
        margin-bottom: 1rem;
      }

      .icon {
        position: static;
        height: 2.5rem;
        width: 2.5rem;
      }
    }

    @media screen and (max-width: 982px) {
    }

    @media screen and (min-width: 983px) {
      main {
        display: flex;
        padding-bottom: 2rem;
      }

      img {
        width: 70%;
      }
    }

    @media screen and (max-width: 1053px) {
    }

    @media screen and (min-width: 1054px) {
      h1 {
        max-width: 35.25rem;
      }

      p {
        max-width: 42.5rem;
      }

      .reason {
        height: 130px;
        position: static;
        flex-direction: row;
        align-items: center;
        margin-left: 2rem;
      }

      .reason div {
        width: 85%;
      }
    }

    @media screen and (min-width: 1201px) {
      h1 {
        padding: 7rem 5rem 1.5rem;
      }

      p {
        padding: 1.5rem 5rem 1.5rem;
      }

      .left-section {
        width: 55%;
      }

      .reason {
        margin-left: 4rem;
      }

      .right-section {
        width: 45%;
      }
    }

    @media screen and (min-width: 1400px) {
      h1, p, div {
        padding-left: 10rem;
      }

      h1 {
        max-width: 35.25rem;
      }

      p {
        max-width: 42.5rem;
      }

      .reason {
        max-height: 5rem;
        margin-top: 1rem;
        margin-left: 9rem;
        margin-bottom: 1rem;
      }


      h3 {
        font-size: 1.19rem;
      }

      img {
        width: 60%;
      }
    }
  `;

  render() {
    return html`
      <main>
        <section class="left-section">
          <h1>Te damos algunas razones para <b>elegirnos</b></h1>
          <p>
            Nos encanta ayudarte con tus aliados del trabajo, te decimos algunas razones por las que debes confiar en nosotros
          </p>

          <div class="reason">
            <img class="icon" src="../../../assets/icon-checkmark.svg" alt="checkmark">
            <div>
              <h3>Calidad</h3>
              <p>Nos encanta darte el mejor servicio por lo que todos nuestros procesos estan basados en los mas altos estandares de calidad, para brindarte la atencion deseada</p>
            </div>
          </div>
          <div class="reason">
            <img class="icon" src="../../../assets/icon-clock.svg" alt="checkmark">
            <div>
              <h3>Velocidad</h3>
              <p>La velocidad es una de nuestras mejores caracteristicas sin descuidar la calidad, por lo que la solucion a tu problema sera en menos de lo que esperas</p>
            </div>
          </div>
          <div class="reason">
            <img class="icon" src="../../../assets/icon-money.svg" alt="checkmark">
            <div>
              <h3>Precio</h3>
              <p>Sabemos que siempre se busca el mejor precio del mercado, es por eso que nuestros servicios tienen el costo exacto para cuidar tu bolsillo</p>
            </div>
          </div>
        </section>
        <section class="right-section">
        <img src="../../../assets/background-home-razones.svg" alt="Engines image">
      </section>
      </main>
      <div class="divider">
        <span class="space"></span>
        <span class="left-rectangle green"></span>
        <span class="left-rectangle blue"></span>

        <span class="right-rectangle green"></span>
        <span class="right-rectangle blue"></span>
      </div>
    `;
  }
}
