import { LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

import './pages/home-page/HomePage';
import './pages/home-page/HomePageRazones';
import './pages/home-page/HomePageProducts';
import './pages/home-page/HomePageTestimonials';
import './pages/home-page/HomePageContact';
import './components/sahios-footer/SahiosFooter';

export class SahiosWeb extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      margin: 0 auto;
      text-align: center;
      background-color: var(--sahios-web-background-color);
    }
  `;

  render() {
    return html`
      <home-page></home-page>
      <home-page-razones></home-page-razones>
      <home-page-products></home-page-products>
      <home-page-testimonials></home-page-testimonials>
      <home-page-contact></home-page-contact>
      <sahios-footer></sahios-footer>
    `;
  }
}
