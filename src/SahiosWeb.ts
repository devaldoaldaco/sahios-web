import { LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

import './pages/home-page/HomePage';

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
      <!--<p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>-->
    `;
  }
}
