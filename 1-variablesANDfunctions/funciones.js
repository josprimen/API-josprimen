function log(text){
	console.log(Date() + " : " + text);
}

log("Yo dude!");

function log2(object1, object2){
	console.log(Date() + " : " + object1 + " " + object2);
	console.log("%s : %s %s", Date(), object1, object2);
}

log2("Yo", "dude!");

//Parรกmetro Arguments

function argumentos(){
	for(var i = 0; i< arguments.length; i++){
		console.log(Date() + " : " +arguments[i]);	
	}
}

argumentos("1","2","3","4");


//Creación de objetos
var objeto = new Object();
objeto.propiedad1 = "Hola";
objeto.propiedad2 = 12;

function imprimirpropiedades (objeto){
	console.log(objeto.propiedad1);
	console.log(objeto.propiedad2);
}

//Se pueden crear funciones y asignar a un objeto una funcion como valor

function imprime(){
	console.log(this.propiedad1);
	console.log(this.propiedad2);
	console.log(this.propiedad2);
}

objeto.propiedadimpresion = imprime;
objeto.propiedadimpresion();

//Otro manera de hacer esto mas sencillo y de manera dinámica
objeto.funcioncilla = function(){
	console.log(this.propiedad1);
	console.log(this.propiedad2);
	console.log(this.propiedad2);
};
objeto.funcioncilla();

//Otra manera de crear objetos
var persona = {nombre:"Juanjo" , telefono: 12352};

//Arrays
var arraynumeros = new Array();
arraynumeros.push(3);
//Manera fácil
var numbers = [1,2,3,4];
var coisas = [1,2,"hola",6];

//iteradores
function impresionante(n){
	console.log(n);
}
numbers.forEach(impresionante);

//un equivalente
numbers.forEach(function(n){console.log(n);});
//Y el equivalente que yo quería con lambda expresiones
numbers.forEach((n)=>console.log(n));

//var tt = numbers.filter((n) => {return n>2;});
console.log("-------");
var tt = numbers.filter((n) => n>2);
console.log(tt);

console.log("------");
var yy = numbers.map((n) => {return (n+5);});
console.log(yy);

//Suma de todos los elementos del array
console.log("------");
var rr = numbers
.reduce((acumulador, n) => {
	return acumulador+n;
});
console.log(rr);