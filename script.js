let contemLetras = document.querySelector('.contemLetras');
let contemNumeros = document.querySelector('.contemNumeros');

let btnSenha = document.querySelector('#gerarSenha')

btnSenha.addEventListener('click', gerarRandomString);

let numeroChars = 8;

function gerarRandomString() {
    if (contemLetras.checked == true) {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let charactersNumber = charset.length;
        let password = [];

        // push
        for (let i = 0; i < numeroChars; i++) {
            password.push(charset.charAt(Math.random() * charactersNumber));
        }

        console.log("Contem Letras: " + password);

    } else if (contemNumeros.checked == true) {
        let charNumbers = "0123456789";
        let charLength = charNumbers.length;
        let numberPassword = [];

        for (i = 0; i < numeroChars; i++) {
            numberPassword.push(charNumbers.charAt(Math.random() * charLength));
        }

        console.log("Contem Números: " + numberPassword);

    } else if (contemLetras.checked == true && contemNumeros.checked == true) {
        let charsMisto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        let charsTeste = charsMisto.length;

        let passwordMisto = [];

        for (let i = 0; i < numeroChars; i++) {
            passwordMisto.push(charsTeste.charAt(Math.random() * charsMisto.length));
        }

        console.log("Contém Letras e Números: " + passwordMisto);
    }

}
