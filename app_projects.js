const btn=document.querySelector('button');
console.log(btn);

function returnToMainPage() {
    window.location.href = '/index.html';
}

btn.addEventListener('click',returnToMainPage);