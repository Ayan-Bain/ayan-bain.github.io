const btn=document.querySelector('button');

function returnToMainPage() {
    window.location.href = '/index.html';
}

btn.addEventListener('click',returnToMainPage);