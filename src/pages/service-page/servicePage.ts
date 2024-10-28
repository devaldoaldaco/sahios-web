import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import './bannerComposition'
@customElement('service-page')
export class ServicePage extends LitElement {
  
  @property()
  dataInfo;

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
  }

  static styles = css`
      *{
        margin: 0;
        padding: 0;
      }
      @media(max-width: 500px) {
         .title-section {
            max-width: 100%;
            height: 80vh;
            padding-top: 149px;
            text-align: left;
            background: radial-gradient(circle at 80rem 92rem,#0B4A5D, #080B24);
            .text-title-service-page {
              margin: 0 31px 0 41px;
            }
            .title-service-page {
              font-size: 40px;
              font-weight: bold;
              letter-spacing: -3px;
              margin: 0 31px 35px 41px;
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
      }
  `;

  render() {
    console.log(this.dataInfo)
    return html`
      <section class="title-section">
        <h1 class="title-service-page"> 
          <span>Conoce</span> todos <br>nuestros servicios <span>especializados</span>
        </h1>
        <p class="text-title-service-page">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p>
        <div class="container">
          <img src="../../assets/service-image.svg">  
        </div>
      </section>
      <section>
        ${this.dataInfo.map( element => html `
          <banner-composition 
            .icon = ${element.icon}
            .title = ${element.title}
            .text = ${element.description}
            >
          </banner-composition>
        `)}
        
      </section>
      
    `
  }
}
