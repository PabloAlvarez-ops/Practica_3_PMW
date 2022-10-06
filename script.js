
  var num, acc = 0, op = "";
  function vaciar() {
     document.getElementById("pantalla").value = "";
    }

  //Operaciones unitarias//
  function cuadrado() {
      let num = document.getElementById("pantalla");
      num.value = num.value * num.value;
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
}

  function mod() {
    let num = document.getElementById("pantalla");
    if (num.value < 0) {
      num.value = -1*num.value
    }
    else {
      num.value = num.value
    }
  }
  
  //Operaciones binarias//
  function add() {
       acc = num.value;  op = "+acc++num.value";
    }

  function eq() {
    console.log(op)
    num.value = eval(op) 
  }
  
