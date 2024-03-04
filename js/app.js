var Tinput = document.querySelector(".input");
var outinput = document.querySelector(".container_mensagem");

function criptografar(){
  var texto = Tinput.value
  var resultCript = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
  outinput.innerHTML ='<textarea readonly class="inputext">' + resultCript + '</textarea>'+ '<button class="Copiar" onclick="Copiar()">Copiar</button>';
}

function descriptografar(){
  textoCriptografado = Tinput.value;
  var textoOriginal = textoCriptografado.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
  outinput.innerHTML ='<textarea readonly class="inputext">' + textoOriginal + '</textarea>'+ '<button class="Copiar" onclick="Copiar()">Copiar</button>'
}

function Copiar(){
  var textCop=document.querySelector('.input');
  textCop.select();
  document.execCommand('copy');
  alert("Copiado!");
}