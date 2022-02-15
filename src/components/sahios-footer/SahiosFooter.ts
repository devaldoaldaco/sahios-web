import { LitElement, html, css } from 'lit';
import {customElement} from "lit/decorators.js";

@customElement('sahios-footer')
  export class SahiosFooter extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      display: block;
      color: white;
      background: #1C1F3B;
    }

    footer {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .logo {
      margin: 2rem auto 0;
      height: 3.5rem;
    }

    p.text {
      padding: 2rem 1rem 1rem;
      font-size: 0.9rem;
      font-weight: 300;
      letter-spacing: 0.03rem;
      line-height: 1.1rem;
    }

    p {
      min-width: calc(100% - 2rem);
      font-size: 0.8rem;
      font-weight: 500;
      margin: 0 auto;
      padding: 1rem;
    }

    .icons {
      margin: 1rem auto 2rem;
      width: calc(320px - 2rem);
      max-width: calc(320px - 2rem);
      min-width: calc(320px - 2rem);
      width: calc(320px - 2rem);
      display: flex;
      justify-content: space-evenly;
    }

    .icon {
      height: 3rem;
      width: 3rem;
      background: #090D2B;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h3 {
      font-size: 0.9rem;
      text-align: left;
      margin: 0;
      padding: 0 1rem;
    }

    .bottom-section {
      display: flex;
      justify-content: space-around;
    }

    .middle-section {
      display: none;
    }

    ul {

      margin: 0;
      padding: 0.5rem 1rem 1rem;
      list-style: none;
      text-align: left;
    }

    li {
      height: 25px;
      font-size: 0.79rem;
      font-weight: 300;
      letter-spacing: 0.03rem;
      line-height: 1.5rem;
    }

    .foot {
      background: #090D2B;
    }

    @media screen and (max-width: 345px) {
    }

    @media screen and (min-width: 380px) {
    }

    @media screen and (min-width: 461px) {
    }

    @media screen and (min-width: 562px) {
      .bottom-section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .bottom-section > section {
        width: 150px;
      }

      h3 {
        text-align: center;
      }

      p.text {
        padding: 2rem 1rem 1rem;
        font-size: 1rem;
      }

      ul {
        max-width: calc(100% - 2rem);
        min-width: calc(100% - 2rem);
        width: calc(100% - 2rem);
        text-align: center;
      }

      .left-section {
        width: 50%;
      }

      .middle-section {
        display: block;
      }

      .right-section {
        width: 50%;
      }
    }

    @media screen and (min-width: 764px) {
      .icons {
        margin: 1rem auto 2rem;
      }

      .bottom-section {
        padding-bottom: 1rem;
      }
    }

    @media screen and (max-width: 982px) {
    }

    @media screen and (min-width: 983px) {
    }

    @media screen and (min-width: 1024px) {
      .logo {
        height: 4.5rem;
      }

      footer {
        width: calc(100% - 6rem);
        flex-direction: row;
        padding: 0 3rem;
      }

      p.text {
        width: 30rem;
        margin: 0;
        padding: 2rem 0 2.3rem 0.5rem;
      }

      .top-section {
        width: 50%;
        text-align: left;
      }

      .bottom-section {
        padding-bottom: 0;
      }

      .icons {
        justify-content: space-between;
        padding: 0 0 2rem 0.5rem;
        margin: 0;
        min-width: 16rem;
      }
    }

    @media screen and (min-width: 1201px) {
      footer {
        width: calc(100% - 20rem);
        flex-direction: row;
        padding: 1rem 10rem;
      }

      .bottom-section {
        width: 50%;
      }
    }

    @media screen and (min-width: 1400px) {

    }
  `;

  render() {
    return html`
      <footer>
        <section class="top-section">
            <img class="logo" src="../../../assets/logo-horizontal-blanco.svg" alt="Logo sahios">
            <p class="text">Quieres saber mas de nosotros y nuestros servicios, checa nuestras redes sociales.</p>
            <div class="icons">
              <div tabindex="0" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 20">
                  <path id="_" data-name="" d="M9,6.491l-.355,3.52h-2.7V20H1.906V10.011H0V6.491H1.906V4.206A5.079,5.079,0,0,1,2.217,2.4,3.5,3.5,0,0,1,3.436.731,4.162,4.162,0,0,1,5.963,0L8.956.023V3.451H6.783a.842.842,0,0,0-.554.183.978.978,0,0,0-.288.777v2.08Z" fill="#fff"/>
                </svg>
              </div>

              <div tabindex="0" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 20">
                  <path id="_" data-name="" d="M25,2.363a10.678,10.678,0,0,1-2.568,2.644v.647a14.435,14.435,0,0,1-.942,5.063,15.047,15.047,0,0,1-2.8,4.613,13.854,13.854,0,0,1-4.566,3.376A15.084,15.084,0,0,1,7.877,20a14.811,14.811,0,0,1-4.167-.591A14.286,14.286,0,0,1,0,17.75q.6.056,1.227.056a10.317,10.317,0,0,0,3.4-.563,10.691,10.691,0,0,0,2.968-1.575,5.175,5.175,0,0,1-2.968-1.027,4.876,4.876,0,0,1-1.8-2.489,5.172,5.172,0,0,0,.942.084,5.365,5.365,0,0,0,1.341-.169A5.1,5.1,0,0,1,1.555,9.353,5.218,5.218,0,0,1,1,7.117V7.032a4.87,4.87,0,0,0,2.34.647A5.127,5.127,0,0,1,1.67,5.865,4.895,4.895,0,0,1,1.056,3.46,4.965,4.965,0,0,1,1.741.928,14.576,14.576,0,0,0,6.393,4.641,14.633,14.633,0,0,0,12.3,6.217a5.785,5.785,0,0,1-.114-1.153,4.867,4.867,0,0,1,.685-2.532A5.142,5.142,0,0,1,14.74.689,4.993,4.993,0,0,1,17.295,0a5.1,5.1,0,0,1,2.055.422A5.044,5.044,0,0,1,21.033,1.6,10.057,10.057,0,0,0,24.287.366a4.856,4.856,0,0,1-.87,1.617,5.253,5.253,0,0,1-1.384,1.2A10.531,10.531,0,0,0,25,2.363Z" fill="#fff"/>
                </svg>
              </div>

              <div tabindex="0"class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path id="_" data-name="" d="M3.834,20a3.607,3.607,0,0,1-1.861-.5A4.04,4.04,0,0,1,.539,18.079,3.714,3.714,0,0,1,0,16.136V7.177H5.8a5.033,5.033,0,0,0-.643,4.617A4.922,4.922,0,0,0,7.2,14.353a4.9,4.9,0,0,0,2.075.789,5.093,5.093,0,0,0,.7.047,5.261,5.261,0,0,0,1.49-.219A5.043,5.043,0,0,0,13.395,13.9a4.88,4.88,0,0,0,1.284-1.829,5.159,5.159,0,0,0,.39-2.377,5.541,5.541,0,0,0-.895-2.537h5.8v8.982a3.767,3.767,0,0,1-.527,1.943A3.891,3.891,0,0,1,16.078,20H3.834ZM10,14.011A4.027,4.027,0,0,1,8,13.5,3.9,3.9,0,0,1,6.559,8.149,3.967,3.967,0,0,1,8,6.709a3.879,3.879,0,0,1,1.984-.537,3.817,3.817,0,0,1,1.973.537,4.005,4.005,0,0,1,1.434,1.44A3.892,3.892,0,0,1,11.961,13.5,3.917,3.917,0,0,1,10,14.011ZM9.988,7.2a2.856,2.856,0,0,0-1.456.388A2.919,2.919,0,0,0,7.477,8.64a2.9,2.9,0,0,0,0,2.9,3.014,3.014,0,0,0,1.055,1.063,2.789,2.789,0,0,0,1.456.4,2.85,2.85,0,0,0,1.457-.389A2.914,2.914,0,0,0,12.5,11.565a2.919,2.919,0,0,0,0-2.914,2.9,2.9,0,0,0-1.055-1.063A2.858,2.858,0,0,0,9.988,7.2Zm9.991-.662H13.83a.4.4,0,0,1-.321-.137,5.292,5.292,0,0,0-2.271-1.235,4.98,4.98,0,0,0-2.523.012A5.436,5.436,0,0,0,6.445,6.422a.332.332,0,0,1-.23.114H.138L.022,6.514V5.646c0,.033,0,.044-.007.047S0,5.283,0,4.595A10.184,10.184,0,0,1,.046,3.542,3.718,3.718,0,0,1,1.582.777L1.674.754V4.937h.8V.617A.613.613,0,0,1,2.523.309.866.866,0,0,1,2.844.16L3.05.114V4.937h.826V.023H4.4V4.937h.825V0H16.078a3.753,3.753,0,0,1,1.915.514A4.071,4.071,0,0,1,19.415,1.9a3.658,3.658,0,0,1,.563,1.874c.015.367.022.816.022,1.372l-.007.477c-.008.547-.012.816-.014.917ZM16.485,1.657c-.341,0-.692,0-1.073.012a.581.581,0,0,0-.458.183.7.7,0,0,0-.161.48v2.1a.635.635,0,0,0,.172.468.611.611,0,0,0,.447.172h2.111a.594.594,0,0,0,.642-.64V2.309a.634.634,0,0,0-.172-.469.607.607,0,0,0-.447-.171C17.173,1.661,16.826,1.657,16.485,1.657Z" fill="#fff"/>
                </svg>
              </div>

              <div tabindex="0" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <g id="Social" transform="translate(-143)">
                    <path id="_" data-name="" d="M10,20a9.934,9.934,0,0,1-8.64-4.936A10.053,10.053,0,0,1,0,10.012,9.754,9.754,0,0,1,1.36,4.96,9.928,9.928,0,0,1,4.948,1.372,10.137,10.137,0,0,1,10,0V.023A9.937,9.937,0,0,1,18.64,4.96,9.745,9.745,0,0,1,20,10.012a10.043,10.043,0,0,1-1.36,5.052A9.934,9.934,0,0,1,10,20ZM12.845,7.269c.054,0,.081.031.081.091l-.138.205-4.754,4.3v.046l1.554,1.234,2.56,1.943a.822.822,0,0,0,.341.082.612.612,0,0,0,.208-.036.627.627,0,0,0,.3-.206,1.5,1.5,0,0,1,.092-.16L14.869,5.76c0-.182-.069-.29-.206-.32a.534.534,0,0,0-.142-.018,1.035,1.035,0,0,0-.269.041l-.206.068L3.9,9.509a.912.912,0,0,0-.239.172.26.26,0,0,0-.08.239.456.456,0,0,0,.229.32l.205.114,2.515.845L12.583,7.36l.16-.068A.3.3,0,0,1,12.845,7.269Z" transform="translate(143)" fill="#fff"/>
                  </g>
                </svg>
              </div>
            </div>
        </section>
        <section class="bottom-section">
          <section class="left-section">
            <h3>Empezar</h3>
            <ul>
              <li tabindex="0">Productos</li>
              <li tabindex="0">Servicios</li>
              <li tabindex="0">Acerca de nosotros</li>
              <li tabindex="0"></li>
            </ul>
          </section>

          <section class="middle-section">
            <h3>Compañia</h3>
            <ul>
              <li tabindex="0">Blog</li>
              <li tabindex="0">Contact</li>
              <li></li>
              <li></li>
            </ul>
          </section>

          <section class="right-section">
            <h3>Ayuda</h3>
            <ul>
              <li tabindex="0">FAQS</li>
              <li tabindex="0">Term & Conditions</li>
              <li tabindex="0">Policy & Privacy</li>
              <li></li>
            </ul>
          </section>
        </section>
      </footer>
      <p class="foot">&copy; Copyright 2022, sahios</p>
    `;
  }
}
