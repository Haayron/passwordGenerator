let estado = document.querySelectorAll('.checkbox');
let btnSenha = document.querySelector('#gerarSenha');
let displaySenha = document.querySelector('#senhaAqui');

// exibicao da alteracao da senha

let tamanhoSenha = document.querySelector('#tamanhoSenha');

let infoTamanhoSenha = document.querySelector('label[for="tamanhoSenha"]');

infoTamanhoSenha.innerHTML = tamanhoSenha.value;

tamanhoSenha.addEventListener('change', alterarTamanhoSenha)

// comeco da senha

displaySenha.style.opacity = 0;

function alterarTamanhoSenha() {
    infoTamanhoSenha.innerHTML = tamanhoSenha.value;
}

let charSets = [
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase = 'abcdefghijklmnopqrstuvwxyz',
    numbers = '0123456789',
    symbols = '!@#$%¨&*()_+/?'
];

btnSenha.addEventListener('click', gerarSenha);

function gerarSenha () {
   
    let selectedCharsets = '';

    // verificar checkbox
    estado.forEach(verificarCheckbox);

    function verificarCheckbox(checkbox, index) {
        if(checkbox.checked) {
            selectedCharsets += charSets[index];
        }
    }

    if (selectedCharsets.length === 0) {
        alert('Selecione ao menos uma opção');
        displaySenha.value = '';

        displaySenha.style.opacity = 0;
        
        return;
    }

    let password = '';

    for (let i=0; i < tamanhoSenha.value; i++) {
        password += selectedCharsets.charAt(Math.floor(Math.random() * selectedCharsets.length));
    }

    displaySenha.value = password;

    let passwordLength = password.length;


    let minWidth = 50;
    let maxWidth = 240;
    let width = minWidth + passwordLength * 10;
    width = Math.min(maxWidth, width);

    displaySenha.style.textAlign = 'center';
    displaySenha.style.width = width + 'px';


    displaySenha.style.opacity = 1;
}
