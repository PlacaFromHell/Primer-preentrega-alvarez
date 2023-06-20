function calculetti(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
      
      }

    return result;
}

let control = true;
let globalresult;

while (control === true) {

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let operator = prompt("Ingresa la operación a realizar (+, -, *, /):");

    globalresult = calculetti(num1, num2, operator); //acá ocurre la magia
      
    if (globalresult !== undefined & globalresult !== NaN) {
            alert("El resultado es: " + globalresult);
            control = false;
    }
      
      else {
          alert("Operación no válida, inténtelo nuevamente");
      }

}

alert("Fin del programa. Muchas gracias.");