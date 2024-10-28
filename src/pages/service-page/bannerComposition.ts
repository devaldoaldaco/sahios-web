import { LitElement, html, css, svg, nothing, PropertyDeclarations } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('banner-composition')
export class BannerComposition extends LitElement {
  
  @property()
  dataInfo

  constructor() {
    super();
    this.dataInfo=[{}]
  }

  static styles = css`
      *{
        margin: 0;
        padding: 0;
      }
      .background-item {
        background-color: green;
        max-width: 465px;
        max-height: 200px;
      }
      @media(max-width: 500px){
      }
  `;

  render() {
    console.log(this.dataInfo)
    return html`
      <div class = "background-item">
        <div class ="banner-icon">
        </div>
        <div class = "banner-text">
          <p>Garantia</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus lorem quis ligula efficitur tempor. Sed quis elit sit amet ipsum pulvinar feugiat non eget sem. Donec nec volutpat ex, et finibus nibh. Fusce finibus,</p>
        </div>  
      </div>    
    `
  }
}
