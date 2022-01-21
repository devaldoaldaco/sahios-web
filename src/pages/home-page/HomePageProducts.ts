import {LitElement, html, css, PropertyValues} from "lit";
import {customElement} from "lit/decorators.js";
import Swiper, { Navigation, Pagination } from 'swiper';

@customElement('home-page-products')
export class HomePageProducts extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: auto;
      width: 100%;
      background: #2A2D45;
      color: white;
      position: relative;
    }

    h1 {
      text-align: left;
      max-width: 60rem;
      margin: 0;
      font-size: 1.75rem;
      letter-spacing: 0.05rem;
      padding: 3rem 1rem 3rem;
    }

    b {
      color: #46F68A;
    }

    p {
      margin: 0 auto;
      font-size: 0.9rem;
      padding: 0 1rem;
      letter-spacing: 0.02rem;
      line-height: 1.1rem;
    }

    main.no-swiper {
      height: auto;
      width: 100%;
      margin: 0 0 2rem 0;
      display: none;
      flex-wrap: wrap;
      justify-content: center;
    }

    img {
      height: calc(320px - 2rem);
      min-width: calc(320px - 2rem);
      max-width: calc(320px - 2rem);
      width: 100%;
      align-self: center;
    }

    article.swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }


    article:not(.swiper-slide) {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }

    article p {
      margin: 0.8rem auto 0;
      padding: 0;
      min-width: calc(320px - 2rem);
      max-width: calc(320px - 2rem);
      width: 100%;
      text-align: left;
    }

    article span {
      text-align: left;
      display: inline-block;
      margin: 0.8rem auto 0;
      min-width: calc(320px - 2rem);
      max-width: calc(320px - 2rem);
      width: 100%;
      color: #46F68A;
      font-size: 0.8rem;
    }

    button {
      height: 3.125rem;
      max-width: calc(320px - 2rem);
      width: calc(320px - 2rem);
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 0.313rem;
      letter-spacing: 0.02rem;
      padding: 0;
      margin: 3rem 0;
    }

    button.secundary {
      background: transparent;
      color: white;
      border: 0.063rem solid #46F68A;
    }

    .divider {
      position: relative;
      overflow: hidden;
      padding: 0;
      display: block;
      height: 7rem;
      width: 100%;
      background: linear-gradient(to right bottom, #2A2D45 50%, rgb(8,11,36) 50%);
    }

    .left-rectangle {
      height: 1.5rem;
      width: 10rem;
      position: absolute;
      transform: rotateZ(165deg);
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
    }

    @media screen and (min-width: 764px) {
      .swiper {
        display: none;
      }

      main.no-swiper {
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
    }

    @media screen and (min-width: 1201px) {
      h1 {
        padding: 5rem 5rem 3rem;
      }
    }

    @media screen and (min-width: 1400px) {
      h1 {
        padding: 5rem 9rem 3rem;
      }

      article:not(.swiper-slide) {
        max-width: 320px;
        min-width: calc(320px - 2rem);
        width: 320px;
        padding: 1rem;
      }
    }
  `;

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    console.log('asdasdsa')
    const shadow: ShadowRoot = this.shadowRoot as ShadowRoot;
    const swiper: HTMLElement = shadow.querySelector('.swiper') as HTMLElement;
    new Swiper(swiper, {
      modules: [Navigation, Pagination],
    });
  }

  render() {
    return html`
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <h1>Productos <b>originales</b> y con garantía,
          te damos la <b>calidad</b> que necesitas</h1>

        <main class="swiper">
          <div class="swiper-wrapper">
            <article class="swiper-slide">
              <img src="../../../assets/producto.png" alt="Producto">
              <p>Tarjeta Madre Gigabyte micro ATX
                A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
              <span>Disponible</span>
            </article>

            <article class="swiper-slide">
              <img src="../../../assets/producto.png" alt="Producto">
              <p>Tarjeta Madre Gigabyte micro ATX
                A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
              <span>Disponible</span>
            </article>

            <article class="swiper-slide">
              <img src="../../../assets/producto.png" alt="Producto">
              <p>Tarjeta Madre Gigabyte micro ATX
                A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
              <span>Disponible</span>
            </article>

            <article class="swiper-slide">
              <img src="../../../assets/producto.png" alt="Producto">
              <p>Tarjeta Madre Gigabyte micro ATX
                A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
              <span>Disponible</span>
            </article>
          </div>
        </main>

        <main class="no-swiper">
          <article>
            <img src="../../../assets/producto.png" alt="Producto">
            <p>Tarjeta Madre Gigabyte micro ATX
              A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
            <span>Disponible</span>
          </article>
          <article>
            <img src="../../../assets/producto.png" alt="Producto">
            <p>Tarjeta Madre Gigabyte micro ATX
              A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
            <span>Disponible</span>
          </article>
          <article>
            <img src="../../../assets/producto.png" alt="Producto">
            <p>Tarjeta Madre Gigabyte micro ATX
              A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
            <span>Disponible</span>
          </article>
          <article>
            <img src="../../../assets/producto.png" alt="Producto">
            <p>Tarjeta Madre Gigabyte micro ATX
              A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD</p>
            <span>Disponible</span>
          </article>
        </main>

        <button class="secundary">Ver todos los productos</button>

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
