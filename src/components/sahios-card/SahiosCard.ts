import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js';
interface CardsElements {
  image: String,
  category: String,
  description: String,
  state: String,
  quantities: number,
  categoryStyle: String,
}
@customElement('sahios-card')
export class SahiosCard extends LitElement {
  @property({ type: Array})  itemsCards:CardsElements[] = [];
  @property({ type: Array})  filterData:CardsElements[] = [];
  @property({ type: String})  imageButtonShare:String='';
   static styles = css`
    .container {
      height:602px;
      width: 393px;
      background-color: #111532;
      border-radius: 20px;
      margin: 15px 22px;
      .all-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        .button-card {
          align-self: end;
          background: none;
        }
        .button-card {
          background-color: #111532;
          margin: 25.3px 25.3px 27.7px 0px; 
        }
        .category-card{
          align-self: flex-start;
          margin: 0;
          padding: 22px 0 0 28px;
          font-size: 14px;
        }
        .description-card {
          margin: 12px 32px 0px 27px;
          align-self: flex-start;
          font-size: 16px;
          text-align: justify;
          font-weight: bold;
        }
        .icon-left-category{
          padding: 0 8px 0 0;
        }
      }

      .footer-description{
        display:flex;
        justify-content: space-between;

        .enable-products{
          margin: 20px 0 0 28px;
          font-size: 22px;
          color: #46F68A
        }
        .not-enable-products{
          margin: 20px 0 0 28px;
          font-size: 22px;
          color: gray
        }
        .quantitis{
          margin: 25px 28px 0 0;
          font-size:12px;
          color: #8C96B7
        }
      }
    }
   `
  constructor(){
    super();
    this.imageButtonShare="../../assets/shared-button.svg"
  }

  get convertSrc(){
    return `${this.itemsCards[0].image}`
  }
  
  changeImage(event: MouseEvent){
    console.log(event.type)
    if(event.type === 'mouseover'){
      this.imageButtonShare="../../assets/shared-button-focus.svg"
    } else {
      this.imageButtonShare="../../assets/shared-button.svg"
    }
  }

  checkStorage(quantities: number){
    let elemntHtml = html``;
    if(quantities > 0){
      elemntHtml = html `
        <p class="enable-products"> Disponible </p>
      `
    } else {
      elemntHtml = html`
        <p class="not-enable-products"> No disponible </p>
        
      `
    }
    return elemntHtml
  }

  get allCards(){
    
    this.filterData = this.itemsCards.filter( element => element.categoryStyle === "computo")
    return html`
      ${this.filterData.map(element => {
        return html` 
          <div class='container'>
            <section class='all-description'>
              <a type="button" class="button-card" @mouseover=${this.changeImage} @mouseleave="${this.changeImage}">
                <img src=${this.imageButtonShare.toString()} alt="x" />
              </a>
              <img src="${element.image}" alt="x" />
              <p class="category-card"><img class="icon-left-category" src="../../assets/card-icon-category.svg" alt="x"/> ${element.category}</p>
              <p class="description-card">${element.description}</p>
            </section>
            <section class="footer-description">
              ${this.checkStorage(element.quantities)}
              <p class="quantitis">Quedan ${element.quantities} unidades</p>
            </section>
          </div>
        `
      })}
    `;
  }
  
  render(){
    return html`
      ${this.allCards}
    `
  }
}