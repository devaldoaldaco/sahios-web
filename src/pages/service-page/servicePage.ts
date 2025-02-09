import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import './bannerComposition'
import '../../pages/home-page/HomePageContact'
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
        title: "garantia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-clock.svg",
        title: "Servicio Rapido",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-money.svg",
        title: "No cobramos por cotizacion ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
    ]
    this.listInfoServices = [
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "Windows",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "Apple IOS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "Tablets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "Smartphones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "Android",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        icon: "../../../assets/icon-checkmark.svg",
        title: "PC components",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
    ]
    this.careComputerEquipment = [
      {
        image: "../../../assets/care-computer-equipment.svg",
        title: "conoce todos nuestros servicios",
        greenLetter: 'especializados',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
        
      },
      {
        image: "../../../assets/care-computer-equipment.svg",
        title: "conoce todos nuestros servicios",
        greenLetter: 'especializados',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
    ]
  }

  static styles = css`
      *{
        margin: 0;
        padding: 0;
      }

      @media(min-width: 500px) {
        .title-section {
          max-width: 100%;
          padding-top: 3rem;
          background: radial-gradient(closest-side at 55% 55%, #0B4A5D, #080B24);
          .left-service-page {
            height: 35rem;
            padding: 0rem 50% 0 8%;
            background-image: url(../../assets/service-image.svg);
            background-repeat: no-repeat;
            background-position-x: 100%;
            background-size: 50%;
            flex-direction: column;
            text-align: left;
            .title-service-page {
              font-size: 60px;
              font-weight: bold;
              letter-spacing: -3px;
              br:nth-child(2){
                display: none;
              }
              span:nth-child(4) {
                color: #46F68A;
              }
            }
            p {
              margin-top: 16px;
              padding-right: 33%;
              font-size: 16px;
            }
          }
        }
        .second-section {
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
            text-align: left;
            font-size: 35px;
            margin: 107px 50% 80px 8%;
            margin-left: 8%;
            margin-right: 50%
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
              height: 60px;
              width: 400px;
              border-radius: 8px;
              background-color: #46F68A;
              margin: 60px 35px 65px 35px;
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
      }
      @media(max-width: 500px) {
         .title-section {
            max-width: 100%;
            height: 80vh;
            padding-top: 3rem;
            text-align: left;
            background: radial-gradient(circle at 80rem 92rem,#0B4A5D, #080B24);
            .left-service-page {
              background-image: url("../../assets/service-image.svg");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              background-position-y: 18rem;
              height:100%
            }
            .text-title-service-page {
              margin: 0 31px 0 41px;
            }
            .title-service-page {
              font-size: 40px;
              font-weight: bold;
              letter-spacing: -3px;
              margin: 0 31px 35px 41px;
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

          .second-section{
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
              background-color:#2B3055;
              height: 421px;
              display: flex;
              flex-direction: column;
              text-align: left;
              justify-content: space-between;
              border-radius: 8px;
              p {
                margin: 0px 35px 0 35px;
              } 
              h2 {
                margin: 68px 20px 0 35px;
              }
              button {
                height: 60px;
                border-radius: 8px;
                background-color: #46F68A;
                margin: 0 35px 73px 35px;
                font-size: 18px;
                font-weight: bold;
              }
            }
            .care-your-pc {
              h2 {
                margin: 2.8rem 42px 0 42px;
              }
            }
          }
      }
  `;

  render() {
    console.log(this.dataInfo)
    return html`
      <section class="title-section">
        <div class="left-service-page">
          <h1 class="title-service-page"> 
            <span class="span-without-color">Conoce</span> todos <br calss="hide-br">nuestros   <br>servicios <span>especializados</span>
          </h1>
          <p class="text-title-service-page">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p>
        </div>
      </section>
      <section class="second-section">
        <div class="card-container">
          ${this.dataInfo.map( element => html `
            <banner-composition 
              class-banner="reason"
              .icon = ${element.icon}
              .title = ${element.title}
              .text = ${element.description}
              >
            </banner-composition>
          `)}
        </div>
        <h1 class="title-section-two">Tenemos todo tipo de soluciones para tu equipo</h1>
        <div class="card-container">
          ${this.listInfoServices.map( element => html `
            <banner-composition 
              class-banner="reason-inside-container"
              .icon = ${element.icon}
              .title = ${element.title}
              .text = ${element.description}
              >
            </banner-composition>
          `)}
        </div>
        <div class="ask-for-a-quote">
          <h2>¿Tu teléfono roto necesita una reparación?</h2>
          <p>Somos especialistas en pantallas touch</p>
          <button>Pedir cotización</button>
        </div>
        <div class="care-your-pc"> 
          <h2>Cuidamos de tu equipo como tu cuidarías de el</h2>
            <div class="card-container-footer">
              ${this.careComputerEquipment.map( element => html `
                <banner-composition
                  class-banner="reason-care-computer"
                  .icon = ${element.image}
                  .title = ${element.title}
                  .text = ${element.description}
                  green-letter=${element.greenLetter}
                  >
                </banner-composition>
              `)}
            </div>
        </div>
        <home-page-contact></home-page-contact>
        <sahios-footer></sahios-footer>
      </section>
    `
  }
}
