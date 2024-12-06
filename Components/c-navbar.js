class NavHeaderElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="header">
                    <i class="fa fa-bars" style="font-size:36px;"></i>
                    <div class="HamburgerReplacement"></div>
                        <nav>
                            <ul>
                                <li><a href="/index.html">Home</a></li>
                                <li><a href="Lesstof/lesstof.html">Lesstof</a></li>
                                <li><h1>Website FDD</h1></li>
                                <li><a href="zoeken.html" class="split">Zoeken</a></li>
                                <li><a href="/Over_mij/Over_mij.html" class="split">Over mij</a></li>
                            </ul>
                        </nav>
                </div>
        `;
    }

}

customElements.define('c-navbar', NavHeaderElement);