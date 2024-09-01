import { LitElement, html, css, svg, nothing } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';

@customElement('product-page')
export class ProductsPage extends LitElement {
  @property({ type: String }) title = 'Home';
  @property({ type: Boolean}) hidden = false;
  static styles = css`
    .principal{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 180px;
      margin-right: 180px;
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
  `;

  render() {
    return html`
      <section>
        <div class="principal">
          <section class="sub-title-text">
            <p class="products-title">Los productos de la mas alta <font color="#46F68A">calidad</font></p>
            <p class="subtext-title"> Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales </p>
          </section>
          <img class="image-products-lap" src="../../../assets/products-laptop.svg" alt="Imagen de operadora telefonica">
        </div>
        <div class="second">
        </div>
      </section>
      <sahios-footer></sahios-footer>
    `
  }
}
