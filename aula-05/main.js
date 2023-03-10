
function temaDark() {
    let body = document.querySelector('body');
    body.classList.toggle('body-dark-mode');

    let titulo = document.querySelector('header');
    titulo.classList.toggle('dark-header');      
}

function itens() {
    let cards = [...document.querySelectorAll('.item')];
    cards.map((cards) => {
        cards.classList.toggle('dark-item');
    })

}

function tituloCards() {
    let cardTexto = [...document.querySelectorAll('div h2, p')];
    cardTexto.map((cardTexto) => {
        cardTexto.classList.toggle('dark-mode-h2');
    })
}

document.querySelector('button').addEventListener('click', temaDark);
document.querySelector('button').addEventListener('click', itens);
document.querySelector('button').addEventListener('click', tituloCards);


