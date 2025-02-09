import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/sahios-footer/SahiosFooter';
import '../service-page/bannerComposition'
import '../../pages/home-page/HomePageContact'
@customElement('more-about')

export class MoreAbout extends LitElement {
  
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
          padding-top:3rem;
          background: radial-gradient(closest-side at 55% 55%, #0B4A5D, #080B24);
          .left-more-about {
            height: 35rem;
            padding: 13% 32% 0 8%;
            background-image: url(../../assets/more-about-background-desktop.svg);
            background-repeat: no-repeat;
            background-position-x: 100%;
            background-size: 100%;
            flex-direction: column;
            text-align: left;
            .title-more-about {
              font-size: clamp(16px, 5vw, 75px);
              font-weight: bold;
              letter-spacing: -3px;
              .break-word {
                white-space: nowrap;
                .title-more-about-color {
                  color: #46F68A;
                  white-space: break-spaces;
                }
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
          display:flex;
          flex-direction: row;
          margin: 10% 0rem 0 8%;
          .left-second-section {
            padding: 0 4rem 0 0;
          }
          h1 {
            font-size: 40px;
            text-align: left;
            margin: 0 0 43px 0;
          }

          .paragraph-second-section{
            text-align: left;
            margin-bottom: 100px;
            font-size: 16px;
          }
          .title-section-two{
            font-size: 40px;
            margin: 55px 35px 45px 0;
            text-align: left;
            line-height: 1.0;
            font-family: arial;
            font-weight: bold;
            letter-spacing: -2px;
          }
          .link-to-google{
            color: #05F5FF;
            text-decoration: none;
          }
          .second-section-link-text {
            margin: 0 5% 3rem 0;
          }
          .image-second-section-background {
            background-image: url("../../assets/more-about-second-section.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-position-x: left;
            background-size: 150%;
            width: 100%;
          }
        }
        .who-is-about {
          display: flex;
          margin: 168px 0 0 8%;
          .text-who-is-about{
            width: 45%;
            h1 {
              text-align: left;
              font-size: 40px;
              margin-bottom: 63px;
            }
            p {
              text-align: left;
              margin: 2rem 0rem 1rem 0;
              font-size: 1rem;
            }
          }
          .decorative-image {
            height:100%;
            width:55%;
            img {
              width: 75%;
            }
          }
        }
        .meet-our-team {
          display:flex;
          flex-direction: column;
          margin: 130px 0 248px 8%;
          h1 { 
            text-align: left;
          }
          .team-image {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .image-our-team {
              margin: 78px 1.5rem 0 0;
            }
          }
        }
      }
      @media(max-width: 500px) {
         .title-section {
            max-width: 100%;
            height: 90vh;
            padding-top: 3rem;
            text-align: left;
            background: radial-gradient(circle at 80rem 92rem,#0B4A5D, #080B24);
            .left-more-about {
              background-image: url("../../assets/more-about-background.svg");
              background-repeat: no-repeat;
              background-position: bottom;
              background-position-x: 100%;
              background-position-y: 150%;
              height:100%;
              .title-more-about {
                font-size: 38px;
                font-weight: bold;
                letter-spacing: -3px;
                margin: 0 31px 35px 41px;
                br:nth-child(3){
                    display: none;
                }
                .title-more-about-color {
                  color: #46F68A;
                }
              }
              .text-title-more-about {
                margin: 0 31px 0 41px;
              }
            }
          }

          .second-section {
            h1 {
              font-size: 2.5rem;
              text-align: left;
              margin: 41px 5% 15px 5%;
            }

            .paragraph-second-section{
              margin: 2rem 5% 6rem 5%;
              text-align: left;
            }
            .title-section-two{
              font-size: 40px;
              margin: 55px 35px 45px 25px;
              text-align: left;
              line-height: 1.0;
              font-family: arial;
              font-weight: bold;
              letter-spacing: -2px;
            }
            .link-to-google{
              color: #05F5FF;
              text-decoration: none;
            }
            .second-section-link-text {
              margin: 0 5% 3rem 5%;
            }
            .image-second-section-background {
              background-image: url("../../assets/more-about-second-section.svg");
              background-repeat: no-repeat;
              width: 100%;
              height: 26rem;;
            }
          }
          .who-is-about {
            .who-is-about-image {
              background-image: url("../../assets/more-about-second-section.svg");
              background-repeat: no-repeat;
              width: 100%;
              height: 26rem;
            }
            .text-who-is-about {
              h1 {
                margin: 0 5% 3rem 5%;
                font-size: 36px;
                text-align: left;
              }
              p {
                margin: 0 5% 2rem 5%;
                text-align: left;
              }
            }
            .decorative-image {
              margin: 25% 5% 10% 5%;
              img {
                height: 100%; 
                width: 100%;
              }
            }
          }
          .meet-our-team {
            margin-bottom: 5  rem;
            h1 {
              font-size: 2rem;
              text-align: left;
              margin: 0 5% 46px 5%;
            }
            .image-our-team {
              margin: 5% 5% 5% 5%;
              img {
                height: 100%; 
                width: 100%;
              } 
            }
          }

      }
  `;

  render() {
    console.log(this.dataInfo)
    return html`
      <section class="title-section">
        <div class="left-more-about">
          <h1 class="title-more-about"> 
            Nos caracterizamos por <span class="break-word">ser un gran <span class="title-more-about-color">equipo de trabajo</span></span>
          </h1>
          <p class="text-title-more-about">Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitales</p>
        </div>
      </section>

      <section class="second-section">
        <div class="left-second-section">
          <h1> 3 cosas nos caracterizan del resto de especialistas</h1>
          <p class="paragraph-second-section"> Nos especializamos en el cuidado y mantenimiento de equipos de computo y telefonía movil, somos expertos en soluciones digitale</p>
          <div class="card-container">
            ${this.dataInfo.map( element => html `
              <banner-composition 
                class-banner="about-us-banner"
                .icon = ${element.icon}
                .title = ${element.title}
                .text = ${element.description}
                >
              </banner-composition>
            `)}
          </div>
          <p class="second-section-link-text">*esta información se obtuvo de opiniones de <a href="" class="link-to-google">Google Maps</a></p>
        </div>
        <div class="image-second-section-background"></div>
      </section>
      <section class="who-is-about">
        <div class="text-who-is-about">
            <h1>Quienes somos?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus, neque et pretium placerat, mi lorem tincidunt libero, a venenatis libero nulla sit amet ex. Sed sapien velit, congue ac condimentum nec, iaculis pharetra dolor. Proin eget gravida mi. Quisque sagittis tristique accumsan. Nunc maximus rutrum eros, non sodales ipsum lobortis non. Maecenas at nulla augue. Vivamus eget semper sem.</p>
            <p>Morbi cursus tincidunt nisi, a maximus sem auctor sit amet. Morbi ullamcorper dictum lectus, non tincidunt est pulvinar id. Aenean sed orci non enim blandit semper at a metus. Vestibulum justo sem, aliquet nec odio eget, mollis gravida est. Phasellus feugiat tempus massa, eget tincidunt erat feugiat ut. Mauris venenatis, lectus nec consectetur finibus, quam purus finibus est, in mollis eros nibh sed lorem. Vestibulum iaculis luctus lectus a iaculis. Donec luctus odio lobortis ligula posuere, et tincidunt felis lobortis. Sed sem augue, rutrum vel odio in, accumsan finibus leo. Pellentesque urna erat, pellentesque et pulvinar id, commodo eget urna. Proin vitae tristique justo. Vivamus scelerisque enim erat, ut fringilla nisl congue eu. Fusce pharetra tortor sit amet sodales consectetur. Vivamus condimentum mauris a blandit tristique. Phasellus dolor ante, lobortis eget elit sed, vehicula tincidunt purus. Nulla nec ipsum suscipit, malesuada leo convallis, sollicitudin erat.</p>
        </div>
        <div class="decorative-image">
            <img src="../../assets/more-about-who-we-are.svg">
        </div>
      </section>
      <section class="meet-our-team">
        <h1>Nuestro equipo</h1>
        <div class="team-image">
          <div class="image-our-team">
            <img src="../../assets/more-about-who-we-are.svg">
          </div>
          <div class="image-our-team">
              <img src="../../assets/more-about-who-we-are.svg">
          </div>
          <div class="image-our-team">
              <img src="../../assets/more-about-who-we-are.svg">
          </div>
        </div>
      </section>
      <sahios-footer></sahios-footer>
    `
  }
}
