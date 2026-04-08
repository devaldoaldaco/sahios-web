import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import './bannerComposition'
import '../home-page/HomePageContact'
@customElement('service-page')
export class ServicePage extends LitElement {
  
  @property({type:Array})
  dataInfo;
  @property({type:Array})
  listInfoServices;

  @property({type:Array})
  careComputerEquipment;


  constructor() {
    super();
    this.dataInfo = [
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "Garantía",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-clock.svg",
        title: "Servicio Rápido",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-money.svg",
        title: "Cotización sin costo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
    ]
    this.listInfoServices = [
      {
        icon: "../../../assets/windows.png",
        title: "Windows",
        description: ""
      },
      {
        icon: "../../../assets/apple.png",
        title: "Apple",
        description: ""
      },
      {
        icon: "../../../assets/android.png",
        title: "Android",
        description: ""
      },
      {
        icon: "../../../assets/huawei.png",
        title: "Huawei",
        description: ""
      },
      {
        icon: "../../../assets/mobile.png",
        title: "Smartphones",
        description: ""
      },
      
      {
        icon: "../../../assets/desktop.png",
        title: "CAD",
        description: ""
      },
    ]
    this.careComputerEquipment = [
      {
        image: "../../../assets/care-computer-equipment.svg",
        title: "Conoce todos nuestros ",
        greenLetter: 'servicios',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
    ]
  }

  static styles = css`
      :host {
        display: block;
        height: fit-content;
        height: 100vh;
        overflow: auto;
      }

      * {
        margin: 0;
        padding: 0;
      }

      .right-section {
        display: none;
      }

      .left-service-page {
        padding: 1rem;
      }

      .ask-for-a-quote {
        padding: 1rem;
      }

      .green-color-title {
        color: #46F68A;
      }

      .text-title-service-page {
        margin-top: 2rem;
      }

      .second-section {
        h2 {
          margin: 1rem 0 3rem 0;
        }
      }
      

      .flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 4rem;
        margin-bottom: 4rem;
        margin-left: 2rem;
        margin-right: 2rem;
      }

      banner-composition.special {
        margin: 0 auto;
        width: 90px;
        height: 90px;
      } 

      .icon-link {
        width: 3rem;
        height: 3rem;
        margin-bottom: 3rem;
        text-align: right;
        display: inline-block;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      /* Tablet: 2 columns */
      @media (min-width: 768px) {
        .flex {
          grid-template-columns: repeat(2, 1fr);
        }
      } 

      @media(min-width: 500px) {
        .title-section {
          max-width: 100%;
          padding: 3rem 0 0 0;
          background: radial-gradient(closest-side at 55% 55%, #0B4A5D, #080B24);
          .left-service-page {
            height: 35rem;
            background-image: url(../../assets/service-image.svg);
            background-repeat: no-repeat;
            background-position-x: 100%;
            background-position-y: 140%;
            background-size: 80%;
            flex-direction: column;
            text-align: left;
            .title-service-page {
              font-weight: bold;
              br:nth-child(2){
                display: none;
              }
              span:nth-child(4) {
                color: #46F68A;
              }
            }
          }
        }

        .text-title-service-page {
          width: 100%;
          margin-top: 2rem;
        }
        .second-section {
          padding: 0;

          .card-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
          .card-container-footer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 100px 0 300px 0;
          }
          .title-section-two {
            text-align: center;
            font-size: 35px;
            margin-top: 5rem;
          }
          .ask-for-a-quote {
            background-color:#2B3055;
            display: flex;
            margin: 121px 7% 134px 7%;
            height: 359px;
            flex-direction: column;
            border-radius: 8px;
            justify-content: center;
            align-items: center;
            p {
              margin: 8px 35px 0 35px;
            } 
            h2 {
              margin: 68px 20px 0 35px;
            }
            button {
              min-height: 60px;
              width: 400px;
              border-radius: 8px;
              background-color: #46F68A;
              margin: 60px 35px 65px 35px;
              font-size: 18px;
              font-weight: bold;
            }
          }
        }

        p {
          max-width: 34.375rem;
          padding: 1.5rem 3rem;
          font-size: 1.563rem;
          letter-spacing: 0.05rem;
          line-height: 1.563rem;
        }
      }

      @media(max-width: 500px) {
         .title-section {
            max-width: 100%;
            height: calc(100vh - 3rem);
            padding-top: 2rem;
            text-align: left;
            background: radial-gradient(circle at 80rem 92rem, #0B4A5D, #080B24);
            .left-service-page {
              background-image: url("../../assets/service-image.svg");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              background-position-x: 60%;
              background-position-y: 70%;
              height:100%
            }
            .title-service-page {
              font-size: 40px;
              font-weight: bold;

              br:nth-child(3){
                display: none;
              }
              span {
                color: #46F68A;
              }
            }
            .container {
              width: 100vw;
              height: 45vh;
              display: flex;
              overflow: hidden;
              flex-direction: column;
              align-items: center;
              margin-top: 4rem;
              img {
                width: auto;
                height: auto; 
              }
            }
          }

          .second-section {
            padding: 1rem 0 1rem 0;

            .title-section-two{
              font-size: 40px;
              margin: 55px 35px 45px 25px;
              text-align: left;
              line-height: 1.0;
              font-family: arial;
              font-weight: bold;
              letter-spacing: -2px;
            }
            .ask-for-a-quote {
              background-color: #2B3055;
              display: flex;
              flex-direction: column;
              text-align: left;
              justify-content: space-between;

              p {
                margin: 0.5rem 0;
              }

              button {
                height: 60px;
                border-radius: 8px;
                background-color: #46F68A;
                margin: 1rem 0 1rem 0;
                font-size: 18px;
                font-weight: bold;
              }
            }
            .care-your-pc {
              h2 {
                margin: 4rem 0;
              }
            }
          }
      }

      @media(min-width: 762px) {
        p {
          max-width: 34.375rem;
          padding: 1.5rem 3rem;
          font-size: 1.563rem;
          letter-spacing: 0.05rem;
          line-height: 1.563rem;
        }

        .left-service-page {
          height: auto;
          background-position-x: 80%;
          background-position-y: 18rem;

          background-size: cover;

          h1 {
            padding: 1.5rem 3rem;
          }
        }

        .flex {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media(min-width: 1024px) {
        p {
          max-width: 34.375rem;
          padding: 1.5rem 3rem;
          font-size: 1.563rem;
          letter-spacing: 0.05rem;
          line-height: 1.563rem;
        }

        .left-service-page {
          height: auto;
        }

        .flex {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media screen and (min-width: 1400px) {
        .img-services {
          display: block;
          width: 50%;
        }

        h1, p {
          padding-left: 10rem;
        }

        .left-service-page {
          width: 70%;
          height: auto;
          background-position-x: 100%;
          background-position-y: 18rem;
          background-repeat: repeat;
          background: none;

          h1 {
            padding-left: 10rem;
          }

        }

        .flex {
          grid-template-columns: repeat(4, 1fr);
        }

        .title-section {
          display: flex;
          align-items: center;

          .right-section {
            display: block;
            width: 40%;
            height: 100%;
            padding-left: 0;
            text-align: left;
            padding-bottom: 5rem;

            img {
              width: 18rem;
              height: auto;
            }
          }
        }

        .second-section {
          .card-container-footer {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
        
      }
  `;

  render() {
    return html`
      <section class="title-section">
        <div class="left-service-page">
          <h1 class="title-service-page"> 
            <span class="span-without-color">Conoce</span> todos <br calss="hide-br">nuestros   <br><span>servicios </span>
          </h1>
          <p class="text-title-service-page">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p>
        </div>
        <div class="right-section">
          <img src="../../../assets/services.png" style="filter: invert(100%)">
        </div>
      </section>
      <section class="second-section">
        <h2>Nos caracterizá: </h2>
        <div class="card-container">
          ${this.dataInfo.map( element => html `
            <banner-composition 
              class-banner="reason"
              .icon = ${element.icon}
              .title = ${element.title}
              >
            </banner-composition>
          `)}
        </div>
        <h1 class="title-section-two">Tenemos la solución para tú <span class="green-color-title">equipo</span></h1>
        <div class="card-container flex">
          ${this.listInfoServices.map( element => html `
            <banner-composition 
              class="special"
              class-banner="reason-inside-container"
              .icon=${element.icon}>
            </banner-composition>
          `)}
        </div>
        <div class="ask-for-a-quote">
          <h2>¿ Tu dispositivo no funciona ?</h2>
          <p>Solicita una cotización sin costo, solo da click en el botón.</p>
          <button>Pedir cotización</button>
        </div>
        <div class="care-your-pc"> 
          <h2>" Tu equipo es importante para ti, y para nosotros también "</h2>
            <div class="card-container-footer">
              ${this.careComputerEquipment.map( element => html `
                <banner-composition
                  class-banner="reason-care-computer"
                  .icon=${element.image}
                  .title=${element.title}
                  green-letter=${element.greenLetter}
                  >
                </banner-composition>
              `)}
              <a class="icon-link" href="https://wa.me/5531139589?text=Hola%20quiero%20información%20sobre%20Servicios">
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <g id="Interface / External_Link">
                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#46F68A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </a>
            </div>
        </div>
        <home-page-contact style="padding: 0 2rem;"></home-page-contact>
      </section>
      <sahios-footer></sahios-footer>
    `
  }
}
