/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value;
	alert(nombre);
	document.getElementById("txtIdNombre").value = "";
	
}
//APUNTES
/*
nombre = document.getElementById("txtIdNombre").value
Lo que se estaría haciendo es copiar los archivos de .html
para luego ser asignados en la variable "nombre".
*/

/*
document.getElementById("txtIdNombre").value = "";
Este comando se utiliza para que, luego de escribir en el buscador
y que nuestro mensaje salga en la barra emergente, al cerrarla
el buscador quede vacio y se borre automaticamente el mensaje anterior
y así poder escribir cualquier otra cosa que queramos.
*/