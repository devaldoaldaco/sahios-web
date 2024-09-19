import { LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { itemsList }  from '../../utils/mock'

interface CardsElements {
  name: String,
  category: String,
}
@customElement('sahios-search-items')
export class SahiosSearchItems extends LitElement {
@property({type: Array}) itemsList: CardsElements[]=[];
  constructor() {
      super();
      this.itemsList = itemsList; 
     
  }
  static styles = css`
    .box-list {
      display: flex;
      flex-direction: column;
      width: 320px;
      height: 600px;
      margin: 0 32px 0 140px;
      align-items: flex-start;
      .font-styles {
        font-size: 14px;
        margin-top: 15px;
      }
      .list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: auto;
        height: auto;
        overflow-y: scroll;
      }
      .style-boxes {
        margin-right: 10px;
      }
      .list::-webkit-scrollbar {
        width: 12px;
      }

      .list::-webkit-scrollbar-track {
        background: none;
      }

      .list::-webkit-scrollbar-thumb {
        background-color: #46F68A;
        border-radius: 20px;
      }
      p {
        font-weight: bold;
        font-size: 20px;
      }
      .separationCheckbox{
        margin-top: 14px;
      }
      .checkbox-label {
        font-size: 14px;
      }
      .search-by-text {
        height: 100px;
        width: 315px;
        background: #3D4056;
        border-radius: 31px;
        border: none;
      }
      .search-by-text::placeholder {
        font-size: 16px;
        padding: 0 0 0 33px;
      }
      .custom-checkbox {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: white;
        border: 2px solid #ccc;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        input[type="checkbox"] {
          display:none;
        } 
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          justify-content: center;
          align-items:center;
          font-size:12px;
          color: white;
        }
        input[type="checkbox"]:checked + .checkmark{
          background-color: #46F68A;
          border:2px solid #46F68A;
          border-radius: 4px;
          height:16px;
          width:16px;
          margin: -2px 0 0 -2px;
          display:flex;
        }
        input[type="checkbox"]:checked + .checkmark::before {
          content: '✓'
        }
      }
    }
  `;


  get gettingItemsList(){
    return html`
      ${this.itemsList.map( element => html`
        <div class="separationCheckbox">
          <label class="custom-checkbox">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <span class="checkbox-label">${element.name}</span>
        </div>
        
        
      `)}
    `
  }
  //<label class="font-styles"><input class="style-boxes" type="checkbox" id=${element.category} value=${element.category} />${element.name}</label>
  render() {
    return html`        
      <div class="box-list">
        <p>Filtrar por</p>
        <input class="search-by-text" placeholder="Buscar Producto">
        <p>Categoria</p>
        <scroll-container class="list">
          ${this.gettingItemsList}
        </scroll-container>
      </div>
    `
  }
}
