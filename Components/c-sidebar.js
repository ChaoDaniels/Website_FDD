class SideBarElement extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
        <div class="sidebar" id="mySideBar">
          <div class="sidebartop">
              <button class="changebutton" onclick="sidebarclose()"><i class="fas fa-xmark fa-2x"></i></button>
              <div><a class="button" id="NavHomeButton" href="/index.html">Home</a></div>
          </div>
          <ul class="menu">
              <li><a class="button" href="./zoeken.html" class="split">Zoeken</a></li>
              <li><a class="button" href="./Lesstof/lesstof.html">Lesstof</a></li>
              <li><a class="button" href="./Lesstof/Design/design.html">Design</a></li>
              <li><a class="button" href="./Lesstof/Usability/usability.html">Usability</a></li>
              <li><a class="button" href="./Lesstof/Development/development.html">Development</a></li>
              <li><a class="button" href="./Over_mij/Over_mij.html" class="split">Over mij</a></li>
              <li><a class="button" href="./Over_mij/Contact/contact.html" class="split">Contact</a></li>
          </ul>
        </div>
      `;
  }

}

customElements.define('c-sidebar', SideBarElement);


function sidebaropen() {
  document.getElementById("mySideBar").style.display = "block";
}

function sidebarclose() {
  document.getElementById("mySideBar").style.display = "none";
}