// Path trick met base
function getBaseURL() {
    if (window.location.href.indexOf("fdd.che-ict.nl") > -1) {
        return "https://fdd.che-ict.nl/2425/cnjdaniels";
    }
    return "";
}

// Navbar webcomponent
class NavHeaderElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const base = getBaseURL();
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

// Sidebar component
class SideBarElement extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        const base = getBaseURL();
        this.innerHTML = `
          <div class="sidebar" id="mySideBar">
            <div class="sidebartop">
                <button class="changebutton" onclick="sidebarclose()"><i class="fas fa-xmark" style="font-size: 56px;"></i></button>
                <div><a class="button" id="NavHomeButton" href="${base}/index.html">Home</a></div>
            </div>
            <ul class="menu">
                <li><a class="button" href="${base}/zoeken.html" class="split">Zoeken</a></li>
                <li><a class="button" href="${base}/Lesstof/lesstof.html">Lesstof</a></li>
                <li><a class="button" href="${base}/Lesstof/Design/design.html">Design</a></li>
                <li><a class="button" href="${base}/Lesstof/Usability/usability.html">Usability</a></li>
                <li><a class="button" href="${base}/Lesstof/Development/development.html">Development</a></li>
                <li><a class="button" href="${base}/Over_mij/Over_mij.html" class="split">Over mij</a></li>
                <li><a class="button" href="${base}/Over_mij/Contact/contact.html" class="split">Contact</a></li>
            </ul>
          </div>
        `;
    }
  
  }
  
customElements.define('c-navbar', NavHeaderElement);
customElements.define('c-sidebar', SideBarElement);
  
  
  function sidebaropen() {
    document.getElementById("mySideBar").style.display = "block";
  }
  
  function sidebarclose() {
    document.getElementById("mySideBar").style.display = "none";
  }