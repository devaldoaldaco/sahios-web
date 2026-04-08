import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('banner-composition')
export class BannerComposition extends LitElement {
  
  @property()
  icon: string;
  title: string;
  text: string;

  @property({type: String, attribute: 'green-letter'})
  greenLetter: string;

  @property({type: String, attribute: "class-banner"})
  classBaner;

  

  constructor() {
    super();
    this.icon = "";
    this.title = "";
    this.text = "";
    this.classBaner="";
    this.greenLetter ="";
  }

  static styles = css`
      * {
        margin: 0;
        padding: 0;
      }

      :host(.special) {
        width: fit-content;

        .reason, .reason-inside-container {
          width: fit-content;
        }

        .reason-inside-container {
          width: 100%;
          height: 100%;
        }

        .reason {
          margin: 0;
        }

        .icons {
          height: 3rem;
          width: 3rem;
          filter: invert(100%);
        }
      }  

      .reason-care-computer {
        margin: 0 auto;

        h3 {
          margin: 0;
        }
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

      @media(min-width: 500px){
        .reason {
          height: 177px;
          width: 460px;
          position: static;
          flex-direction: row;
          align-items: center;
          margin-left: 2rem;
          text-align: left;
          img {
            height: 2rem;
            width: 2rem;
            margin: 0 40px 0 30px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
          }
        }
        
        .reason-inside-container {
          border-radius: 1rem;
          margin: 16px 12px;
          text-align: left;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 500px;
          img {
            height: 2rem;
            width: 2rem;
            margin: 0 40px 0 30px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
          }
        }
        .reason-care-computer {
          margin: 2rem auto;
          position: relative;
          width: calc(90% - 1rem);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 698px;
          h3 {
            margin: 60px 0;
            margin-right: 5rem;
            font-size: 40px;
          }
          div {
            text-align: left;
          }
          span {
            color:  #46F68A;
          }
          p {
            font-size: 18px;
          }
        }

        .about-us-banner {
          margin: 2rem auto;
          padding: 1rem;
          display: flex;
          justify-content: center;
          max-width: 44.75rem;
          height: 177px;
          position: static;
          flex-direction: row;
          align-items: center;
          text-align: left;
          border-radius: 1rem;
          background: rgba(255,255,255,0.06);
          img {
            height: 2rem;
            width: 2rem;
            margin: 0 40px 0 30px;
          }
          h3 {
            font-size: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
          }
        }
      }
      @media(max-width: 500px){
        .reason {
          img {
            position: absolute;
            top: -0.75rem;
            left: calc(50% - 0.75rem);
            height: 2rem;
            width: 2rem;
            margin: 0px auto;
          }
          div {
            display: block;
            unicode-bidi: isolate;
            h3 {
              font-size: 1.3rem;
              margin: 0.8rem 0px;
            }
            p {
              margin: 0px;
              font-size: 0.8rem;
              letter-spacing: 0.02rem;
              line-height: 1rem;
              padding: 0px;
            }
          }
        }
        .reason-inside-container {
          border-radius: 1rem;
          position: relative;
          display: flex;
          justify-content: center;

          div {
            margin-left: 1rem;
            text-align: left;
            h3 {
              margin-bottom: 14px;
            }
          }
        }

        .reason-care-computer {
          margin: 0 auto;
          position: relative;
          width: calc(90% - 1rem);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 44.75rem;

          h3 {
            font-size: 2rem;
            padding: 3rem 0 1rem 0;
          }
          div {
            text-align: left;
          }
          span {
            color:  #46F68A;
          }
        }

        .about-us-banner {
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
          img {
              position: absolute;
              top: -0.75rem;
              left: calc(50% - 0.75rem);
              height: 2rem;
              width: 2rem;
              margin: 0px auto;
            }
          div {
            display: block;
            unicode-bidi: isolate;
            h3 {
              font-size: 1.3rem;
              margin: 0.8rem 0px;
            }
            p {
              margin: 0px;
              font-size: 0.8rem;
              letter-spacing: 0.02rem;
              line-height: 1rem;
              padding: 0px;
            }
          }
        }
      }
  `;

  render() {
    return html`
      <div class="${this.classBaner}">
        <img class="icons" src="${this.icon}" alt="checkmark">
        
        ${this.text || this.title ? html`<div>
          <h3>${this.title} <span>${this.greenLetter}</span></h3>
          <p>${this.text}</p>
        </div>` : nothing}
      </div>
    `
  }
}
