import { LitElement, html, css } from "lit";
import {customElement, property} from 'lit/decorators.js';

@customElement('sahios-form')
export class SahiosForm extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: calc(569px - 6rem);
      width: calc(450px - 6rem);
      color: white;
      background-color: rgba(255, 255, 255, 0.16);
      padding: 3rem;
      backdrop-filter: blur(50px);
      -webkit-backdrop-filter: blur(50px);
      border-radius: 1rem;
    }

    section {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    p {
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
    }

    input {
      height: 53px;
      color: white;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.26);
      padding: 0 1rem;
      border: none;
      font-family: 'Sofia Pro';
    }

    textarea {
      height: 70px;
      color: white;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.26);
      padding: 1rem 1rem;
      border: none;
      font-family: 'Sofia Pro';
    }

    select {
      height: 53px;
      color: white;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.26);
      padding: 0 1rem;
      border: none;
      font-family: 'Sofia Pro';
    }

    .select-selected.select-arrow-active:after {
      border-color: transparent transparent #fff transparent;
      top: 7px;
    }

    button {
      height: 55px;
      width: 100%;
      border-radius: 5px;
      letter-spacing: 0.02rem;
      padding: 0;
      margin-top: 1.5rem;
    }

    button.primary {
      background: #46F68A;
      color: #080D25;
      border: none;
      opacity: 1;
    }

    ::placeholder {
      color: white;
    }
  `;

  _doPost(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const name = form.userName.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const hour = form.hour.value;

    const numero = "5215531139589"; 

    const texto = `
      Hola 👋

      Me gustaría recibir información sobre sus servicios:

      👤 Nombre: ${name}\n
      📱 Teléfono: ${phone}\n
      ⌚ Hour: ${hour}\n\n

      📝 Mensaje:\n
      ${message}
    `;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  render() {
    return html`
        <section>
          <p>Describe tu problema, nosotros nos comunicamos contigo</p>
          <form @submit="${this._doPost}" id="form">
            <input id="name" type="text" name="userName" placeholder="Nombre" autocomplete/>
            <input id="phone" type="text" name="phone" placeholder="Teléfono Movil" autocomplete/>
            <textarea id="message" name="message"  cols="30" rows="10" placeholder="Cuentanos tu problema"></textarea>
            <select id="hour" name="hour">
              <option value="0">En que horario te queda mejor ?</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
            </select>
            <button class="primary">Agendar</button>
          </form>
        </section>
    `;
  }
}
