import { LitElement, html, css, unsafeCSS } from 'lit';
import {customElement, property} from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

import './pages/home-page/HomePage';
import './pages/home-page/HomePageReasons';
import './pages/home-page/HomePageProducts';
import './pages/home-page/HomePageTestimonials';
import './pages/home-page/HomePageContact';
import './components/sahios-footer/SahiosFooter';
import './components/sahios-sidebar/SahiosSidebar';

export class SahiosWeb extends LitElement {
  @property({ type: String }) title = 'My app';
  @property({ type: Boolean }) sidebarOpen = false;

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

  _handleShowMenu(event: MouseEvent) {
    this.sidebarOpen = true;
    this.style.overflow = 'hidden';
  }

  _handleHideMenu(event: MouseEvent) {
    this.sidebarOpen = false;
    this.style.overflow = 'scroll';
  }

  render() {
    return html`
      <home-page @sahios-header-menu-clicked="${this._handleShowMenu}"></home-page>
      <home-page-reasons></home-page-reasons>
      <home-page-products></home-page-products>
      <home-page-testimonials></home-page-testimonials>
      <home-page-contact></home-page-contact>
      <sahios-footer></sahios-footer>
      <!--Global Components-->
      ${this.sidebarOpen ? html`<sahios-sidebar .open="${this.sidebarOpen}" @sahios-sidebar-close-clicked="${this._handleHideMenu}"></sahios-sidebar>` : ''}
    `;
  }
}
