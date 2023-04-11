// Adicionando Letras

let contemLetras =  document.querySelector('.contemLetras');


contemLetras.addEventListener('click', gerarRandomString);

// numero de caracteres
let numeroChars = 8;


function gerarRandomString () {
    if(contemLetras.checked == true) {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let charactersNumber = charset.length;

        // retornando numero entre 0 e charset.length
 

        let valor = '';

        // push forçado
        for (let i = 0; i < numeroChars; i++) {
            valor += charset.charAt(Math.random() * charactersNumber);
        }


        console.log(valor)
    }
       
}
 
