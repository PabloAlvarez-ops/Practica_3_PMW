function vaciar(){
      docuemnt.getElementById("pantalla") = "";
    }

function cuadrado(){
  let num = document.getElementById("pantalla");
  num.value = num.value * num.value;
}

function mod(){
  let num = document.getElementById("pantalla");
  if(num.value >= 0){
    num.value = num.value
  } else{
    num.value = num.value * -1
  }
}

function fact(){
  let num = document.getElementById("pantalla");
  if(num.value == 0 || num.value == 1){
    return 1
  } else{
    for (var i=num.value-1; i>=1; i--){
      num.value *= i
    }
  }

  
// function fact() {
//   let num = document.getElementById("pantalla");
//   if (num.value === 0 || num.value === 1)
//     return 1;
//   for (var i = num.value - 1; i >= 1; i--) {
//     num.value *= i;
//   }
//   return num.value;
// }