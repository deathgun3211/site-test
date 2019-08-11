document.querySelector('.registration_submit').addEventListener('click', registration_complete);

function registration_complete() {
    fetch('client-data.html')
        .then(response => response.text())
        .then(html => document.querySelector('.inner-text').innerHTML = html);
}