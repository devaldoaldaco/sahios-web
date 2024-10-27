import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
@customElement('service-page')
export class ServicePage extends LitElement {
  
  @property()
  dataInfo

  constructor() {
    super();
    this.dataInfo = [
      {
        title: "garantia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        title: "Servicio Rapido",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        title: "garantia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        title: "garantia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      },
      {
        title: "garantia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,"
      }
    ]
  }

  static styles = css`
      *{
        margin: 0;
        padding: 0;
      }
      @media(max-width: 500px){
        .main-service-page {
          max-width: 500px;
          overflow: hidden;
        }
         .title-service-page{
          margin-top: 149px;
          font-size: 43px;
          font-weight: bold;
          p {
            color: #46F68A;
          }
         }
         .container img {
            position: fixed;
            width: 632px;
            height: 690px;
            display: block;
         }
         .container {
            max-width:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
         }
      }
  `;

  render() {
    console.log(this.dataInfo)
    return html`
      <section class="image-present">
        <h1 class="title-service-page">Conoce todos nuestros servicios <p>especializados</p></h1>
        <p class="text-title-service-page">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p>
      </section>
      <div class="container">
        <img src="../../assets/service-image.svg">  
      </div>
    `
  }
}
