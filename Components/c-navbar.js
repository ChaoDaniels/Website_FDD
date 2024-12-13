class NavHeaderElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <div class="header">
                    <button class="changebutton" onclick="sidebaropen()"><i class="fa fa-bars fa-2x"></i></button>
                    <div class="HamburgerReplacement"></div>
                        <nav>
                            <ul>
                                <li><a href="./index.html">Home</a></li>
                                <li><h1>Website FDD</h1></li>
                                <li><a href="zoeken.html" class="split">Zoeken</a></li>
                                <li><a href="/Over_mij/Over_mij.html" class="split">Over mij</a></li>
                            </ul>
                        </nav>
                </div>
            </div>
        `;
    }

}

customElements.define('c-navbar', NavHeaderElement);