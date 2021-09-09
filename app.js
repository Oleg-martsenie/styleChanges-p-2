const telefone = document.querySelector('#telfone');
const button = document.querySelector('button');

let mostralTelefone = (element) => {
    button.addEventListener('click', function(){
        telefone.style.display = 'block';
        element.style.display = 'none';

    });
}