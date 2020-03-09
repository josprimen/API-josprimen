console.log("My test module");

/*module.exports = function(){
console.log("My test module in a function");	
}*/

var object = {};
object.console = function(){
	console.log("Module object test");
};

module.exports = object;