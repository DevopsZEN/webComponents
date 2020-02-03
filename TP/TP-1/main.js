<<<<<<< HEAD
import {html, render} from "lit-html";

class AppNavbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        const template = document.querySelector("template");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
=======
class AppNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.querySelector("template");
    console.log(this.getAttribute("theme"));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  static get observedAttributes(){
    return ["theme"];
  }
>>>>>>> 61f4b27dbce7f75d1949b84df174e47e53f8b080

  attributeChangedCallback(name, oldVal, newVal) {
    console.table({ name, oldVal, newVal });
  }

  connectedCallback() {
    console.log("Element added to the DOM");
  }

  disconnectedCallback() {
    console.log("Element removed from the DOM");
  }
}

window.customElements.define("app-navbar", AppNavbar);
