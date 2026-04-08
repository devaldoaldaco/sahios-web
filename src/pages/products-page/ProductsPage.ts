import { LitElement, html, css, svg, nothing } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import '../../components/sahios-cards/SahiosCards';
import '../../components/sahios-search-items/sahiosSearchItems'

interface CardsElements {
  image: String,
  category: String,
  description: String,
  state: String,
  quantities: number,
  categoryStyle: String,
}

@customElement('product-page')
export class ProductsPage extends LitElement {
  @property({ type: String }) title = 'Home';
  @property({ type: Boolean}) hidden = false;
  @property({ type: Array})  
  itemsCards;

  constructor() {
      super();
      this.itemsCards = [{
        categoryStyle: 'filter: invert(100%);',
        image: '../../assets/pc.png',
        category: 'Computo',
        description: 'Equipo especializado segun la necesidad del usuario',
        state: 'disponible',
        quantities: 4
      },
      {
        categoryStyle: 'filter: invert(100%);',
        image: '../../assets/processor.png',
        category: 'Electronica',
        description: 'Dispositivos electronicos para cualquier uso',
        state: 'disponible',
        quantities: 3
      },
      {
        categoryStyle: 'filter: invert(100%);',
        image: '../../assets/infra.png',
        category: 'Infraestructura',
        description: 'Instalacion de infraestructura dedicada',
        state: 'disponible',
        quantities: 0
      },
      {
        categoryStyle: 'filter: invert(100%);',
        image: '../../assets/microchip.png',
        category: 'Software',
        description: 'Generacion de software a la medida',
        state: 'disponible',
        quantities: 2
      }
    ];
  }
  static styles = css`
    :host {
      display: block;
      max-width: 100%;  
      height: calc(100vh - 5rem);
      overflow: auto;
    }

    .principal {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .subtext-title {
        color:'#FFFFFF';
        font-size: 1rem;
      }
    }

    .products-title {
      color: '#FFFFFF';
      max-width: 100%;
      margin: 0px;
      font-size: 2.188rem;
      padding: 3rem 1rem 1rem;
    }

    .search-list {
      margin: 0 0 0 0;
    }

    .sub-header {
      max-width: 100%;
      height: 3rem;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem 0 1.5rem;
    }

    .categories {
      padding: 0 0.5rem 3rem;
    }
    
    main {
      min-height: calc(100% - 5rem);
      background: rgb(8,11,36);
      color: white;
      text-align: left;
      max-width: 100%;
    }

    h1 {
      max-width: 100%;
      margin: 0;
      font-size: 2.188rem;
      padding: 3rem 1rem 1rem;
    }

    p {
      max-width: 100%;
      margin: 0;
      font-size: 1rem;
      padding: 1rem;
      letter-spacing: 0.01rem;
      line-height: 1.25rem;
    }

    img {
      max-width: 100%;
    }

    .highlight {
      color: #46F68A;
    }

    .select-text {
      display: none;
    }


    @media screen and (min-width: 850px) {
    }


    @media screen and (min-width: 932px) {
    }

    @media screen and (max-width: 982px) {
    }

    @media screen and (min-width: 983px) {
      :host {
        display: block;
      }

      .principal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 10rem;
        padding-right: 10rem;
        font-size: 3rem;

        .subtext-title {
          color: '#FFFFFF';
          font-size: 1.5rem;
          letter-spacing: 0.05rem;
          line-height: 1.8rem;
        }
      }

      .sub-header {
        margin: 4rem 0 3rem;
      }

      .select-text {
        margin: 0 auto 3rem;
        width: calc(100% - 20rem);
        text-align: center;
        display: block;
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }

    @media screen and (min-width: 1024px) {
    }

    @media screen and (max-width: 1054px) {
    }

    @media screen and (min-width: 1201px) {
      img {
        max-width: 50%;
      }
    }

    @media screen and (min-width: 1400px) {}
  `;

  render() {
    return html`
    <main>
      <div class="principal">
        <section class="sub-title-text">
          <h1 class="products-title">Impulsamos el rendimiento de tu tecnología con <span class="highlight">soluciones de alto nivel</span>.</h1>
          <p class="subtext-title">Productos y servicios especializados; mantenimiento, optimización y soporte para equipos de cómputo y telefonía móvil. </p>
        </section>
        <img class="image-products-lap" src="../../../assets/products-laptop.svg" alt="Imagen de operadora telefonica">
      </div>
      <div class="sub-header">
        <h2>Productos disponibles</h2>
      </div>
      <div class="categories">
        <sahios-cards .itemsCards=${this.itemsCards}></sahios-cards>
      </div>
      <p class="select-text">Selecciona una de las tarjetas de arriba para descubrir más información sobre los productos disponibles en cada categoría.</p>
    </main>
    <sahios-footer></sahios-footer>
    
    `
  }
}
