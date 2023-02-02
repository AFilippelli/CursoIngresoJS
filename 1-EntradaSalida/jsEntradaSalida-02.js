/*
Adrian Filippelli
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombrePersona;  
	nombrePersona = prompt("Cuál es tu nombre");
	let apellidoPersona;
	apellidoPersona = prompt("cuál es tu apellido")
	alert("Usted se llama " + nombrePersona + " Y su apellido es " + apellidoPersona)
}
//lo que va a la derecha del = es el origen
//lo que va a la izquierda del = es destino