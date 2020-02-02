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
