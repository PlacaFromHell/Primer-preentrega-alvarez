function buscador(personas, tipo, dato) {

  let acumulador = 0;
  let mensaje = "";
  
  personas.forEach(function(persona) {
    if (persona[tipo].toString().toUpperCase() == dato.toString().toUpperCase()) {
      acumulador = acumulador + 1;
      mensaje = mensaje + persona.nombre + " de " + persona.edad + " años, DNI " + persona.dni + ", sexo " + persona.sexo + "\n";
    }
  }) 

  if (acumulador!= 0) {
    alert("Hay " + acumulador + " coincidencias: \n" + mensaje);
  }
  else {
    alert("Lo sentimos, no hay coincidencias. Revise los datos ingresados o considere que la persona no existe.")
  }
  };

function Persona(nombre, edad, dni, sexo) {
  this.nombre = nombre;
  this.edad = edad;
  this.dni = dni;
  this.sexo = sexo;
}

let persona1 = new Persona("Brayan Ramírez", 25, 32145678, "masculino");
let persona2 = new Persona("Andrés Brunero", 35, 14523672, "masculino");
let persona3 = new Persona("Rita Hernández", 44, 22334656, "femenino");
let persona4 = new Persona("Carolina Daher", 28, 45235678, "femenino");
let persona5 = new Persona("Valentín Pelossi", 19, 36999453, "masculino");
let persona6 = new Persona("Fernando Beñatena", 51, 44966781, "masculino");
let persona7 = new Persona("Perla López", 47, 23964231, "femenino");
let persona8 = new Persona("Cristian Sica", 40, 36994322, "masculino");

let personas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8];

let control = true;
let dato = "";
let tipo ="";

while (control == true) {
  control = false;
  tipo = prompt("Ingrese el tipo de dato (nombre, edad, DNI, sexo).");
  tipo = tipo.toLowerCase();
  
  switch (tipo) {
    case "nombre":
      dato = prompt("Ingrese el dato que está buscando (ejemplo: Andrés Brunero).");
    break;
    case "edad":
      dato = prompt("Ingrese el dato que está buscando (ejemplo: 25).");
    break;
    case "dni":
      dato = prompt("Ingrese el dato que está buscando (ejemplo: 36999453).");
    break;
    case "sexo":
      dato = prompt("Ingrese el dato que está buscando (ejemplo: masculino).");
    break;
    default:
      control = true;
      alert("ERROR: tipo de dato incorrecto :(");
  }
}

buscador(personas, tipo, dato);
