console.log("Superficie de un circulo")
console.log("La superficie de un ciruclo esta dada por la formula:")
console.log("S=π(r^2)")
const radioString = prompt("Ingresar el radio del ciculo"); 
const π = Math.PI; 
const radio = Number (radioString)
var raelevado = Math.pow(radio,2)
console.log("La superficies del circulo es: π*","(",radio, "^2)")
console.log(π* raelevado )