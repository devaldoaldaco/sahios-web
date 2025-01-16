import { LitElement, html, css, svg, nothing } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import '../../components/sahios-card/SahiosCard';
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
        categoryStyle: 'componente',
        image: '../../assets/cardsImage/mother-board-atx.svg',
        category: 'Electronica',
        description: 'Tarjeta Madre Gigabyte micro ATX A520M S2H, S-AM4, AMD A520, HDMI, 64GB DDR4 para AMD',
        state: 'disponible',
        quantities: 4
      },
      {
        categoryStyle: 'componente',
        image: '../../assets/cardsImage/mother-board-atx-2.svg',
        category: 'Electronica',
        description: 'Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,',
        state: 'disponible',
        quantities: 3
      },
      {
        categoryStyle: 'computo',
        image: '../../assets/cardsImage/procesador-i5.svg',
        category: 'Electronica',
        description: 'Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,',
        state: 'disponible',
        quantities: 0
      },
      {
        categoryStyle: 'yuli',
        image: '../../assets/cardsImage/procesador-i5.svg',
        category: 'yolete',
        description: 'Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,',
        state: 'disponible',
        quantities: 2
      },
      {
        categoryStyle: 'computo',
        image: '../../assets/cardsImage/procesador-i5.svg',
        category: 'Electronica',
        description: 'Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,',
        state: 'disponible',
        quantities: 2
      },
      {
        categoryStyle: 'computo',
        image: '../../assets/cardsImage/procesador-i5.svg',
        category: 'Electronica',
        description: 'Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,',
        state: 'disponible',
        quantities: 2
      },
      {
        categoryStyle: 'computo',
        image: '../../assets/cardsImage/procesador-i5.svg',
        category: 'Electronica',
        description: 'Tarjeta Madre Gigabyte micro ATX Procesador Intel Core i5-10400, S-1200, 2.90GHz, Six-Core, 12MB Smart Cache,',
        state: 'disponible',
        quantities: 2
      },
    ];
  }
  static styles = css`
    .principal{
      margin:100px 180px 0 180px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      .subtext-title{
        color:'#FFFFFF';
        font-size: 1rem;
      }
    }
    .products-title {
      font-size: 4.688rem;
      font-weight: 600;
      margin: 0 0 32px 0;
      color: '#FFFFFF';
    }
    .sub-title-text{
      text-align: left;
      margin-right: 56.9px
    }

    .image-products-lap {
      height: 685px;
      width: 750px;
    }
    .cards {
      display: flex;
      flex-wrap: wrap
    }
    .search-list {
      margin: 0 0 0 0;
    }
    .second {
      display:flex;
      background-color: #2A2D45;
    }

    .sub-header{
      position: absolute;
      width: calc(100% - 5rem);
      background-color: #383B55;
      height: 104px;
      margin: 0 102px 0 102px;
      border-radius: 16px;
    }
    
    main {
      min-height: calc(100% - 5rem);
      background: rgb(8,11,36);
      color: white;
      text-align: left;
      overflow: hidden;
      position: relative
    }
    :host {
      width: 100%;
    }
  `;

  render() {
    return html`
    <main>
      <div class="principal">
        <section class="sub-title-text">
          <p class="products-title">Los productos de la mas alta <font color="#46F68A">calidad</font></p>
          <p class="subtext-title"> Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales </p>
        </section>
        <img class="image-products-lap" src="../../../assets/products-laptop.svg" alt="Imagen de operadora telefonica">
      </div>
      <div class="sub-header">
        <p>este es el menu </p>
      </div>
      <div class="second">
        <sahios-search-items class="search-list"></sahios-search-items>      
        <sahios-card class="cards" .itemsCards=${this.itemsCards}></sahios-card>
      </div>
      <sahios-footer></sahios-footer>
    </main>
    `
  }
}
