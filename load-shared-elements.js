document.addEventListener('DOMContentLoaded', function() {

    //NB: Assumes that this script will be run from a subpage

    fetch('../navbar.html')
    .then(response => response.text())
    .then(html => {
        let nav = document.getElementById('navbar');
        nav.innerHTML = html;
        nav.addEventListener('click', function() {
            document.getElementById('navbar-links').classList.toggle('navbar-expanded');
        });
    });

    fetch('../footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });
});