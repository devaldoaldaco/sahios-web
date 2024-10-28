import { LitElement, html, css, unsafeCSS, nothing } from 'lit';
import {customElement, property} from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

import './pages/home-page/HomePage';
import './pages/home-page/HomePageReasons';
import './pages/home-page/HomePageProducts';
import './pages/home-page/HomePageTestimonials';
import './pages/home-page/HomePageContact';
import './pages/products-page/ProductsPage'
import './components/sahios-footer/SahiosFooter';
import './components/sahios-sidebar/SahiosSidebar';
import './pages/service-page/servicePage'

interface PageActive {
  id: String,
  active: boolean
}
export class SahiosWeb extends LitElement {
  @property({ type: String }) title = 'My app';
  @property({ type: Boolean }) sidebarOpen = false;
  @property({ type: Boolean }) changeState = false;
  @property({ type: Boolean }) renderProperty = false;
  @property({ type: Array }) pageActive:PageActive[] = [{
    id:'home', 
    active: true,
  },
  {
    id:'products',
    active: false
  },
  {
    id :'service', 
    active: false
  },
  {
    id:"about",
    active: false
  }];

  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      margin: 0 auto;
      text-align: center;
      background-color: var(--sahios-web-background-color);
    }
    .header-main{
      position: fixed;
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
  
  _changePage(event: MouseEvent){
    this.renderProperty = !this.renderProperty;
    const selector = String(event.detail);
    this.pageActive.forEach(element => {
      if(selector === element.id) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }
  get tplHomePage(){
    return this.pageActive[0].active ? html`
      <home-page @sahios-header-menu-clicked="${this._handleShowMenu}"></home-page>
      <home-page-reasons></home-page-reasons>
      <home-page-products></home-page-products>
      <home-page-testimonials></home-page-testimonials>
      <home-page-contact></home-page-contact>
      <sahios-footer></sahios-footer>
      <!--Global Components-->
      ${this.sidebarOpen ? html`<sahios-sidebar .open="${this.sidebarOpen}" @sahios-sidebar-close-clicked="${this._handleHideMenu}"></sahios-sidebar>`:nothing}
    `: '';
  }

  get tplProductsPage(){
    return  this.pageActive[1].active ? html`
      <product-page></product-page>`: nothing;
  }

  get tplServicePage() {
    return this.pageActive[2].active ? html`
    <service-page class="service-page"></service-page>`: nothing;
  }

  render() {
    return html`
      <sahios-header class="header-main"  @sahios-change-page-header=${this._changePage}></sahios-header>
      ${this.tplHomePage}
      ${this.tplProductsPage}
      ${this.tplServicePage}
    `;
  }
}
