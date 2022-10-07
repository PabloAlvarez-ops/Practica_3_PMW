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
      let num = document.getElementById("pantalla");
      num.value = num.value * num.value;
      rellenar_info();
    }

  function mod() {
  let num = document.getElementById("pantalla");
  if (num.value < 0) {
    num.value = -1*num.value
  }
  else {
    num.value = num.value
  }
  rellenar_info();
}

  function fact() {
    let num = document.getElementById("pantalla");
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
        case "multiplicador":
          total *= numInput;
          break;
        case "":
          total = numInput;
          break;
        case "sumador":
          total += numInput;
          break;
        default:
          break;
      }
      
    }

    const mul = () => {
      guardaInput(Number(document.getElementById("pantalla").value));
      total = document.getElementById("pantalla").value;
      operador = "multiplicador";
      vaciar();
      

    }

    const add = () => {
      guardaInput(Number(document.getElementById("pantalla").value));
      total = document.getElementById("pantalla").value;
      operador = "sumador";
      vaciar();
      

    }

    const eq = () => {
      guardaInput(Number(document.getElementById("pantalla").value));
      operador = "";
       if (operador === "multiplicador") {
         num.value *= total;
       } else if (operador === "sumador" ) {
         num.value += total;
       }
      document.getElementById("pantalla").value = total;
      rellenar_info();
    }

    
