class NavHeaderElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let base = "";
        if(window.location.href.indexOf("fdd.che-ict.nl")> -1) {
            base = "https://fdd.che-ict.nl/2425/cnjdaniels"
        }
        this.innerHTML = `
            <div class="navbar">
                <header>
                <button class="changebutton" onclick="sidebaropen()"><i class="fa fa-bars fa-2x"></i></button>
                <nav>
                    <a href="${base}/index.html">Home</a>
                    <h1>Website FDD</h1>
                    <a href="${base}/zoeken.html">Zoeken</a>
                    <a href="${base}/Over_mij/Contact/contact.html">Contact</a>
                </nav>
            </header>
            </div>
        `;
    }

}

customElements.define('c-navbar', NavHeaderElement);