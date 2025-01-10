class NavHeaderElement extends HTMLElement {
    // path = '';
    constructor() {
        
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <header>
                <button class="changebutton" onclick="sidebaropen()"><i class="fa fa-bars fa-2x"></i></button>
                <nav>
                    <a href="./index.html">Home</a>
                    <h1>Website FDD</h1>
                    <a href="./zoeken.html">Zoeken</a>
                    <a href="./Over_mij/Contact/contact.html">Contact</a>
                </nav>
            </header>
            </div>
        `;
    }

}

customElements.define('c-navbar', NavHeaderElement);