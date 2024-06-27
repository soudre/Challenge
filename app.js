function encriptarTexto(){

    let texto = document.getElementById("texto_encript").value;
    let titulo_mensaje = document.getElementById("msj__titulo");
    let parrafo = document.getElementById("msj__aviso");

    /* La letra "e" es convertida para "enter"
       La letra "i" es convertida para "imes"
       La letra "a" es convertida para "ai"
       La letra "o" es convertida para "ober"
       La letra "u" es convertida para "ufat"
    */

    let texto_encriptado = texto 
        .replace(/e/gi, "enter") 
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if(texto.length != 0){
        document.getElementById("texto_encript").value = texto_encriptado;
        titulo_mensaje.textContent = "Encriptación exitosa";
        parrafo.textContent = "";
    }else{
        titulo_mensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar";
        alert("Se debe ingresar un texto");
    }
}

function desencriptarTexto(){

    let texto = document.getElementById("texto_encript").value;
    let titulo_mensaje = document.getElementById("msj__titulo");
    let parrafo = document.getElementById("msj__aviso");


    let texto_encriptado = texto 
        .replace(/enter/gi, "e") 
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if(texto.length != 0){
        document.getElementById("texto_encript").value = texto_encriptado;
        titulo_mensaje.textContent = "Texto desencriptado";
        parrafo.textContent = "";
    }else{
        titulo_mensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar";
        alert("Se debe ingresar un texto");
    }

}