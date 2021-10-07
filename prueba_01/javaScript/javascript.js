// JavaScript Document
var nombre = "Juan Carlos";

var persona = {
	nombre: "Maria",
	apellido: "Dubon",
	imprimirNombre: function(){
		console.log(this.nombre + " " + this.apellido);
	}
};

persona.imprimirNombre();
