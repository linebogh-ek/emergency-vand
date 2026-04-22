const form = document.querySelector("#webform");

const outputEmail = document.querySelector("#outputEmail");
const outputKontakt = document.querySelector("#outputKontakt");
const outputIndberet = document.querySelector("#outputIndberet");
const outputTid = document.querySelector("#outputTid");
const outputSted = document.querySelector("#outputSted");
const outputBemaerk = document.querySelector("#outputBemaerk");

// PREVENT POP UP
form.addEventListener("invalid", cancelPopup, true);
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// HANDLE SUBMIT
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // 1
  event.preventDefault();

  // 2
  const formData = new FormData(form);

  outputEmail.textContent = "Email: " + formData.get("email");
  outputKontakt.textContent = "Må vi kontakte dig?: " + formData.get("kontakt");
  outputIndberet.textContent =
    "Du har indberettet: " + formData.get("indberet");
  outputTid.textContent = "Tid: " + formData.get("tid");
  outputSted.textContent = "Sted: " + formData.get("sted");
  outputBemaerk.textContent = "Andre bemærkninger: " + formData.get("bemaerk");
  // 3
  form.reset();
}
