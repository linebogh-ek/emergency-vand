document.querySelector("#Pesticider").addEventListener("click", infoPesticider);

function infoPesticider() {
  document.querySelector(".info-text h2").textContent = "Pesticider";
  document.querySelector(".placeholder").textContent = "Pesticider";
}

document.querySelector("#Korn").addEventListener("click", infoPesticider);
function infoPesticider() {
  document.querySelector(".info-text h2").textContent = "Pesticider";
  document.querySelector(".info-text p").textContent = "Pesticider";
}

document.querySelector("#Grise").addEventListener("click", infoGrise);

function infoGrise() {
  document.querySelector(".info-text h2").textContent = "Grise";
  document.querySelector(".info-text p").textContent = "Grise";
}

document.querySelector("#Grundvand").addEventListener("click", infoDrikkevand);
document.querySelector("#Tap").addEventListener("click", infoDrikkevand);
function infoDrikkevand() {
  document.querySelector(".info-text h2").textContent = "Drikkevand";
  document.querySelector(".info-text p").textContent = "Drikkevand";
}
