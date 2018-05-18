/*DOM
La estructura del html se divide en nodos y elementos
  Tipos de Nodos
Document --> Nodo Raiz
Element --> Reprep las etiquetas
Attr --> los atributos de las etiquetas
Text -->el valor de estas
Comment --> Xomentarios
  Obtener los nodos del html
var botones = document.getElementById("7");
var botones1 = document.getElementsByTagName('imput');
var botones2 = document.getElementsByName()
  Crear nodo de tipo Element
var parr = document.createElement("p");
var text = document.createTextNode("Esto es una calculadora");
parr.appendChild(text);
document.body.appendChild(parr);
  Eliminar nodos
var boton = document.getElementById("8");
nodoPadre.removeChil(nodoHijo)
boton.parentNode.removeChild(boton);
  Acceder atributos
var botones = document.getElementsByTagName("h2");*/

/ /*Eliminar nodos*/
// var boton = document.getElementById("8");
// /*nodoPadre.removeChil(nodoHijo)*/
// boton.parentNode.removeChild(boton);

// /*Acceder atributos*/
// var botones = document.getElementsByTagName("h2");

/*Eventos */
/*Son los qe manejan la intereatividad del user con la pagina*/
/*Tipos*/
/*<!-- Como atributos -->*/
/*----------  van en las etiquetas del html
no es recomendable  ----------*/

/*<input type="button" value="Pinchame y verás" onclick="alert('Gracias por pinchar');" />*/

/*----------  Usando this  ----------*/

/**
 *
original
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver">
  Sección de contenidos...
</div>

whithout this
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver"
onmouseover="document.getElementById('contenidos').style.borderColor='black';"
onmouseout="document.getElementById('contenidos').style.borderColor='silver';">
  Sección de contenidos...
</div>


with this
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver"
onmouseover="this.style.borderColor='black';"
onmouseout="this.style.borderColor='silver';">
  Sección de contenidos...
</div>

 *
 */

/*Usando archviso externos*/
/**
 * Se modula las funcionalidades requeridas


en vez de
	<input type="button" value="Pinchame y verás" onclick="alert('Gracias por pinchar');" />

se hace una funcion
	function muestraMensaje() {
 		 alert('Gracias por pinchar');
	}

y se llama
<input type="button" value="Pinchame y verás" onclick="muestraMensaje()" />

 */

/*----------  Manejadores Semanticos  ----------*/
/**
	Es una evolucion del anterior metodo
Pasos
1.Identificar cada elemento html con id
2.Definir funcionabilidad en archivos externo
2.Asignar la funcionabilidad al elemnto html

*/
/*
id=caja
id=8
*/

function ver(){
	var caja = document.getElementById("caja");
	caja.value="8";
}

//var boton = document.getElementById("8");
//boton.onclick = ver;


/*Objeto Event */
/*Ayuada a manejar info adicional*/
/*Forma para todos los ordenadores*/
/**

	function manejadorEventos(elEvento) {
  		var evento = elEvento || window.event;
	}

 */

window.onload = function() {
  document.onkeyup = muestraInformacion;
  document.onkeypress = muestraInformacion;
  document.onkeydown = muestraInformacion;
}

function muestraInformacion(elEvento) {
  var evento = window.event || elEvento;

  var mensaje = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);
	info.innerHTML += "<br>--------------------------------------<br>" + mensaje;
}     
