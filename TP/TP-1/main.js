import {html, render} from "lit-html";

class AppNavbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        const template = document.querySelector("template");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Element added to the DOM");
    }

    disconnectedCallback() {
        console.log("Element removed from the DOM");
    }
}

window.customElements.define("app-navbar", AppNavbar);