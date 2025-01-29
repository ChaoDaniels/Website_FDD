async function fetchPages() {
    const response = await fetch('pages.json');
    const pages = await response.json();
    return pages;
}

async function generateList() {
    const pages = await fetchPages();
    const ul = document.getElementById("myUL");
    ul.innerHTML = ""; // Clear existing list items
    pages.forEach(page => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = page.url;
        a.textContent = page.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.getElementById("myInput").addEventListener("focus", function() {
    document.getElementById("myUL").style.display = "block";
});

document.addEventListener("click", function(event) {
    var isClickInside = document.getElementById("myInput").contains(event.target) || document.getElementById("myUL").contains(event.target);
    if (!isClickInside) {
        document.getElementById("myUL").style.display = "none";
    }
});

// De lijst word thier gegeneerd wanneer de pagina geladen is
document.addEventListener("DOMContentLoaded", generateList);