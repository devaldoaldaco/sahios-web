import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import '../service-page/bannerComposition'
import '../home-page/HomePageContact'
@customElement('about-us')
export class AboutUs extends LitElement {
  
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
        title: "Garantia",
        description: "Nuestra garantía está diseñada para ofrecer confianza y respaldo a nuestros clientes, al mismo tiempo que establece condiciones claras y justas que permitan una relación profesional transparente y equilibrada para ambas partes."
      },
      {
        icon: "../../../assets/icon-clock.svg",
        title: "Servicio Rapido",
        description: "Nos comprometemos a desarrollar soluciones de software optimizadas para ofrecer tiempos de carga adecuados y un funcionamiento ágil, considerando las buenas prácticas de desarrollo, optimización de recursos y estándares actuales de la industria."
      },
      {
        icon: "../../../assets/icon-money.svg",
        title: "Cotización",
        description: "Todas nuestras cotizaciones se elaboran con base en el análisis de los requerimientos proporcionados por el cliente, considerando el alcance del proyecto, nivel de complejidad, tiempo estimado de desarrollo, tecnologías a utilizar y recursos necesarios."
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
    :host {
      display: block;
      max-width: 100%;  
      height: calc(100vh - 5rem);
      overflow: auto;
    }

    /* Estilos Base / Móvil (Mobile First) */
    .about-us {
      display: flex;
      flex-direction: column; /* Texto arriba, imagen abajo */
      align-items: center;
      justify-content: center;
      text-align: left;
      padding: 20px;
      gap: 2rem;
    }

    .left-more-about {
      max-width: 600px;
    }

    .team-member img {
      width: 100%;
      max-width: 400px; /* Ajusta según el tamaño de tu SVG */
      height: auto;
    }

    .green-text-title {
      color: #46F68A;
    }

    /* Escritorio (Pantallas mayores a 1024px) */
    @media (min-width: 1024px) {
      .about-us {
        flex-direction: row; /* Texto izquierda, imagen derecha */
        text-align: left;
        justify-content: space-between;
        padding-left: 5rem;
      }

      .left-more-about {
        flex: 1;
      }

      .team-member {
        flex: 1;
        display: flex;
        justify-content: center; /* Centra el SVG en su mitad derecha */
      }

      .break-word {
        display: block; /* Permite el salto de línea visual en el título */
      }
    }

    @media screen and (min-width: 1400px) {
      .about-us {
        padding-left: 10rem;
      }

      h1, p, div {
          max-width: 45rem;
      }
    } 
  `;

  render() {
    return html`
      <section class="about-us">
        <div class="left-more-about">
          <h1 class="title-more-about"> 
            Nos caracterizamos por ser un <span class="green-text-title">gran equipo.</span>
          </h1>
          <p class="text-title-more-about">Somos un equipo especializado y comprometido con nuestros clientes. Ofrecemos soluciones digitales eficientes, confiables y adaptadas a tus necesidades para optimizar el rendimiento de tu tecnología.</p>
        </div>
        <div class="team-member">
          <img src="../../../assets/josue.svg"/>
        </div>
      </section>
      <sahios-footer></sahios-footer>
    `
  }
}
