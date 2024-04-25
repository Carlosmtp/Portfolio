const header = document.querySelector("header");
const footer = document.querySelector("footer");

fetch("header.html")
    .then(response => response.text())
    .then(html => {
        header.innerHTML = html;
    })
    .catch(error => {
        console.error("Error fetching header:", error);
    });

fetch("footer.html")
    .then(response => response.text())
    .then(html => {
        footer.innerHTML = html;
    })
    .catch(error => {
        console.error("Error fetching footer:", error);
    });