let estado = document.querySelectorAll('.checkbox');
let btnSenha = document.querySelector('#gerarSenha');
let displaySenha = document.querySelector('#senhaAqui');

let password = [];

let tamanhoSenha = document.querySelector('#tamanhoSenha');
 
let infoTamanhoSenha = document.querySelector('label[for="tamanhoSenha"]');

infoTamanhoSenha.innerHTML = tamanhoSenha.value;

tamanhoSenha.addEventListener('change', alterarTamanhoSenha)

function alterarTamanhoSenha () {
    infoTamanhoSenha.innerHTML = tamanhoSenha.value;
}


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsetNumbers = '0123456789';
let charsetSimbols = '!@#$%¨&*()_+/?';

let charLetterNumber = charset + charsetNumbers;
let charNumSimb = charsetNumbers + charsetSimbols;
let charLetterSimb = charset + charsetSimbols;

let charAll = charset + charsetNumbers + charsetSimbols;

btnSenha.addEventListener('click', checarEstado);

function checarEstado() {
    if (estado[0].checked == true && estado[1].checked == false && estado[2].checked == false) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charset.charAt(Math.random() * charset.length);
        }

        displaySenha.value = password.join('');

    } else if (estado[1].checked == true && estado[2].checked == false && estado[0].checked == false) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charsetNumbers.charAt(Math.random() * charsetNumbers.length);

        }

        displaySenha.value = password.join('');

    } else if (estado[2].checked == true && estado[1].checked == false && estado[0].checked == false) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charsetSimbols.charAt(Math.random() * charsetSimbols.length);
        }

        displaySenha.value = password.join('');

    } else if (estado[0].checked == true && estado[1].checked == true && estado[2].checked == false) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charLetterNumber.charAt(Math.random() * charLetterNumber.length);
        }

        displaySenha.value = password.join('');

    } else if (estado[1].checked == true && estado[2].checked == true && estado[0].checked == false) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charNumSimb.charAt(Math.random() * charNumSimb.length);
        }

        displaySenha.value = password.join('');

    } else if (estado[0].checked == true && estado[2].checked == true && estado[1].checked == false) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charLetterSimb.charAt(Math.random() * charLetterSimb.length);
        }

        displaySenha.value = password.join('');

    } else if (estado[1].checked == true && estado[2].checked == true && estado[0].checked == true) {

        for (i = 0; i < tamanhoSenha.value; i++) {
            password[i] = charAll.charAt(Math.random() * charAll.length);
        }

        displaySenha.value = password.join('');

    } else {
        alert('Selecione ao menos uma opção');

        displaySenha.value = '';
    }


    console.log(displaySenha.value)

}



