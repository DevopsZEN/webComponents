class AppNavbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML = `<h2>Hello World!</h2>`;
    }
}

window.customElements.define("app-navbar", AppNavbar);