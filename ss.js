const text = "Sorry Madam jiii, Yeti dheri dukha garare sorry vanako xu khuruka message garne ani kasto lagayo pani vannu hai. Ek xin, !!tyo message seen garara jane haina ne ra react matra garara haina !! message garara janu hai ";

const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    document.querySelector(".textCont").textContent += arr[i];
    i++;
    setTimeout(() => dashOut(arr), interval(arr[i - 1]));
  }
}

function interval(letter) {
  if (letter === ";" || letter === "." || letter === ",") {
    return Math.floor(Math.random() * 500 + 500); // 500ms to 1000ms
  } else {
    return Math.floor(Math.random() * 130 + 30); // 30ms to 160ms
  }
}

function startFromBegin() {
  i = 0;
  document.querySelector(".textCont").textContent = ""; // Clear text content before starting
  dashOut(paragraph);
}

startFromBegin();
