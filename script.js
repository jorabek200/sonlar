let number = prompt("Biron bir son yozing");

let response = number % 2;

let juft = !response;

console.log(juft);

if (juft == true) {
    document.getElementById("javob").innerHTML = "Yozgan raqamingiz juft";
  } else {
    document.getElementById("javob").innerHTML = "Yozgan raqamingiz toq";
  }