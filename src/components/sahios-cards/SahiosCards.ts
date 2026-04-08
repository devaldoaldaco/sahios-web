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
@customElement('sahios-cards')
export class SahiosCards extends LitElement {
  @property({ type: Array})  itemsCards:CardsElements[] = [];
  @property({ type: Array})  filterData:CardsElements[] = [];
  @property({ type: String})  imageButtonShare:String='';
   static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .card {
      min-height: 5rem;
      max-height: 12rem;
      min-width: 5rem;
      max-width: 12rem;
      background-color: #383B55;
      border-radius: 1.5rem;
      padding: 1rem;

      .header {
        text-align: center;

        .icon-category {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      .footer{
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        font-size: 0.7rem;

        a {
          text-decoration: none;
          color: #46F68A;
        }

        svg {
          height: 1rem;
          width: 1rem;
        }
      }
    }

    @media screen and (min-width: 983px) {
      :host {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        align-items: center;
        justify-content: center;
        align-content: center;
        padding-left: 10rem;
        padding-right: 10rem;
        place-items: center;
      }

      .card {
        max-width: 15rem;
        max-height: 15rem;
        min-width: 15rem;
        min-height: 15rem;

        .header {
          padding: 1rem;

          p {
            margin: 1rem 0 0.5rem;
          }
        }
      }

      a {
        margin-top: 3rem;
      }
    }
  `;

  get allCards(){
    return html`
      ${this.itemsCards.map(element => {
        return html` 
          <div class="card">
            <section class="header">
              <img class="icon-category" src=".${element.image}" alt="category image" style="${element.categoryStyle}"/>
              <p>
                ${element.category}
              </p>
            </section>
            <section class="footer">
              <a href="https://wa.me/5531139589?text=Hola%20quiero%20información%20sobre%20${element.category}">
                Disponibilidad
                <svg class="icon-link" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <g id="Interface / External_Link">
                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#46F68A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </a>
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