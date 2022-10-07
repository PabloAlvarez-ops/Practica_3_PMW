// 1. Campo informativo //

const vaciar = () => {
  document.getElementById("pantalla").value = "";
}

const rellenar_info = () => {
  if (Number(document.getElementById("pantalla").value) < 100) {
    document.getElementById("info").innerHTML = "Info: El resultado es menor que 100";
  } else if (Number(document.getElementById("pantalla").value) > 200) {
    document.getElementById("info").innerHTML = "Info: El resultado es superior a 200";
  } else {
    document.getElementById("info").innerHTML = "Info: El resultado está entre 100 y 200";
  }
}


// 2. Operaciones unitarias //

function cuadrado() {
  let num = document.getElementById("pantalla"); // Obtenemos el input introducido por el usuario
  num.value = num.value * num.value; // Calculamos el cuadrado: numero multiplicado por si mismo.
  rellenar_info();
}

function mod() {
  let num = document.getElementById("pantalla"); // Obtenemos el input introducido por el usuario
  if (num.value < 0) { // Para cualquier numero negativo, lo multiplicamos por -1 para obtenerlo en +-
    num.value = -1 * num.value
  }
  else {
    num.value = num.value // Si ya esta en + se deja como esta. Asi obtenemos el valor absoluto.
  }
  rellenar_info();
}

function fact() {
  let num = document.getElementById("pantalla"); // Obtenemos el input introducido por el usuario
  // 0! y 1! dan como resultado 1. En caso contrario (else) debemos multiplicarlo por su anterior hasta llegar a 1.
  if (num.value == 0 || num.value == 1) {
    num.value = 1
  }
  else {
    for (var i = num.value - 1; i >= 1; i--) {
      num.value *= i;
    }
    num.value
  }
  rellenar_info();
}


// 3. Operaciones binarias //  

let operador = "";
let total = 0;

const guardaInput = (numInput) => {
  switch (operador) {
    case "multiplicar":
      total *= numInput;
      break;
    case "":
      total = numInput;
      break;
    case "sumar":
      total += numInput;
      break;
    case "restar":
      total -= numInput;
      break;
    case "dividir":
      total /= numInput;
      break;
    case "resto":
      total %= numInput;
      break;
    case "potencia":
      total **= numInput;
      break;
    default:
      break;
  }

}

function mul() {
  guardaInput(Number(document.getElementById("pantalla").value)); //Guardamos el primer numero introducido 
  total = document.getElementById("pantalla").value; //Guardamos el segundo numero introducido
  operador = "multiplicar"; //Una vez tenemos el operador a aplicar vamos al 'case' correspondiente.
  vaciar();
}

function add() {
  guardaInput(Number(document.getElementById("pantalla").value));
  total = Number(document.getElementById("pantalla").value);
  operador = "sumar";
  vaciar();
}

function rest() {
  guardaInput(Number(document.getElementById("pantalla").value));
  total = document.getElementById("pantalla").value;
  operador = "restar";
  vaciar();
}

function div() {
  guardaInput(Number(document.getElementById("pantalla").value));
  total = document.getElementById("pantalla").value;
  operador = "dividir";
  vaciar();
}

function res() {
  guardaInput(Number(document.getElementById("pantalla").value));
  total = document.getElementById("pantalla").value;
  operador = "resto";
  vaciar();
}

function pot() {
  guardaInput(Number(document.getElementById("pantalla").value));
  total = document.getElementById("pantalla").value;
  operador = "potencia";
  vaciar();
}

function eq() { //Al pulsar el boton de igual, en funcion del operador introducido aplicará una operacion u otra.
  guardaInput(Number(document.getElementById("pantalla").value));
  operador = "";
  if (operador === "multiplicar") {
    num.value *= total;
  } else if (operador === "sumar") {
    num.value += total;
  } else if (operador === "restar") {
    num.value -= total;
  } else if (operador === "dividir") {
    num.value /= total
  } else if (operador === "resto") {
    num.value %= total
  } else if (operador === "potencia") {
    num.value **= total
  }
  document.getElementById("pantalla").value = total; // Muestra el resultado de la operación.
  rellenar_info();
}


// 4. Operaciones en formato CSV //

function sumatorio() {
  let num = document.getElementById("pantalla"); //Obtenemos el input introducido
  let list = num.value.split(","); // Separamos el input por comas y el resultado lo almacena en una lista

  // Sumamos los elementos contenidos en la lista
  let i = 0, acc = 0;
  while (i < list.length) acc += +list[i++];
 
  num.value = acc;
  rellenar_info();
  
}

const sortNumbers = (a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    }

  function ordenar() {
    let listaString = document.getElementById("pantalla").value; //Obtenemos el input introducido
    let arrayNumeros = listaString.split(","); // Separamos el input por comas y el resultado lo almacena en una lista
    document.getElementById("pantalla").value = arrayNumeros.sort(sortNumbers); // modificamos el input para que muestre la lista de numeros ordenada de forma ascendente.
  }

function revertir() {
    let listaString = document.getElementById("pantalla").value; //Obtenemos el input introducido
    let arrayNumeros = listaString.split(","); // Separamos el input por comas y el resultado lo almacena en una lista
    document.getElementById("pantalla").value = arrayNumeros.reverse(sortNumbers); // modificamos el input para que muestre la lista de numeros ordenada de forma descendente.
  }

function quitar() {
      let listaString = document.getElementById("pantalla").value; //Obtenemos el input introducido
      let arrayNumeros = listaString.split(","); // Separamos el input por comas y el resultado lo almacena en una lista
      arrayNumeros.pop(); // eliminamos el ultimo elemento de la lista
      document.getElementById("pantalla").value = arrayNumeros; // modificamos el input para que muestre la lista de numeros con el ultimo eliminado.

    }


