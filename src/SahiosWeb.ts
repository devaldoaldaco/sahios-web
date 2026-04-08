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
import './pages/service-page/ServicePage';
import './pages/about-us/AboutUs';

interface PageActive {
  id: String,
  active: boolean
}
export class SahiosWeb extends LitElement {
  @property({ type: String }) currentPage = 'home';
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
    .body-content{
      margin: 5rem 0 0 0;
      width: 100%;
    }
    sahios-sidebar {
      display: none;
    } 
  `;

  _handleShowMenu(event: MouseEvent) {
    this.sidebarOpen = true;
    this.style.overflow = 'hidden';
    const sidebar: any = this.shadowRoot?.querySelector('sahios-sidebar');
    sidebar.style.display = 'block';
  }

  _handleHideMenu(event: MouseEvent) {
    this.sidebarOpen = false;
    this.style.overflow = 'scroll';
    this._changePage(event);
  }
  
  _changePage(event: MouseEvent){
    console.log(event)
    const sidebar: any = this.shadowRoot?.querySelector('sahios-sidebar');
    sidebar.style.display = 'none';
    const header: any = this.shadowRoot?.querySelector('sahios-header');
    if(screen.width < 794) {
      header._hideButton('close');
      header._showButton('burger');
    }
    this.renderProperty = !this.renderProperty;
    const selector = String(event.detail);
    this.pageActive.forEach(element => {
      if(selector === element.id) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
    this.currentPage = selector;
  }

  _goTo(section: String) {
    const element = this.shadowRoot?.querySelector(`#${section}`);
    element?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  get tplHomePage(){
    return this.pageActive[0].active ? html`
      <home-page @navigate-to-contact="${() => this._goTo('contact')}"></home-page>
      <home-page-reasons></home-page-reasons>
      <home-page-testimonials></home-page-testimonials>
      <home-page-contact id="contact"></home-page-contact>
      <sahios-footer></sahios-footer>
    `: '';
  }

  get tplProductsPage(){
    return  this.pageActive[1].active ? html`
      <product-page></product-page>
    ` : nothing;
  }

  get tplServicePage() {
    return this.pageActive[2].active ? html`
      <service-page></service-page>
    ` : nothing;
  }

  get tplMoreAbout() {
    return this.pageActive[3].active ? html `
      <about-us></about-us>
    ` : nothing;
  }

  render() {
    return html`
      <sahios-header class="header-main" currentpage="${this.currentPage}" @sahios-header-menu-clicked="${this._handleShowMenu}" @sahios-change-page-header=${this._changePage} @sahios-sidebar-close-clicked="${this._handleHideMenu}"></sahios-header>
      <div class="body-content">
        ${this.tplHomePage}
        ${this.tplProductsPage}
        ${this.tplServicePage}
        ${this.tplMoreAbout}
      </div>
      <sahios-sidebar @sahios-change-page-header=${this._changePage}></sahios-sidebar>
    `;
  }
}
