//variable = 5; no es adecuado crear la variable sin definirla primero
var variable = "hola";
var integer = 1;
var double = 1.234;
var string = "texto";
var boolean = true;

console.log(integer);
console.log(string);
console.log(boolean + "\n");

//La variable adquiere el tipo de lo primero que le metes. No es necesario declararlas, al inicializar adquiere el tipo.
var variable = "Puedes cambiar el valor por algo del mismo tipo que el objeto añadido al inicializarla";
console.log(variable);
var variable = variable + 3;
console.log("CORINGA: "+ variable + "\n");

//Operaciones con variables
integer = integer +1;
string = string + " y más texto";
boolean = false;

console.log(integer);
console.log(string);
console.log(boolean + "\n");

//Parseo
//console.log(parseInt(double,0)); // El segundo parámetro es la base, usar siempre cero (u omitirlo) para quedarte con el valor entero.
//console.log(parseInt(double,1));
console.log();

//Comparadores
if (integer == double){
	console.log("es igual");
}else{console.log("Transorma primero el integer en double y luego compara. No son iguales. \n");}

integer = 1;
double = 1.0;
if (integer === double){
	console.log("Son iguales");
}else{
	console.log(integer);
	console.log(double);
	console.log("Al poner triple igual tambien se comprueba si las variables son del mismo tipo. \n");
}

