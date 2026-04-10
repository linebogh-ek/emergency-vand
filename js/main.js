const form = document.querySelector("#webform");

// function cancelPopup(event) {
//   event.preventDefault();
//   form.querySelector(":user-invalid").focus();
// }

// form.addEventListener("invalid", cancelPopup, true);

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const formdata = new FormData(form);

  const outputEmail = document.querySelector("#outputEmail");
  const outputKontakt = document.querySelector("#outputKontakt");
  const outputIndberet = document.querySelector("#outputIndberet");
  const outputTid = document.querySelector("#outputTid");
  const outputSted = document.querySelector("#outputSted");
  const outputBemaerk = document.querySelector("#outputBemaerk");

  outputEmail.textContent = "Email: " + formdata.get("email");
  outputKontakt.textContent = "Må vi kontakte dig?: " + formdata.get("kontakt");
  outputIndberet.textContent =
    "Du har indberettet: " + formdata.get("indberet");
  outputTid.textContent = "Tid: " + formdata.get("tid");
  outputSted.textContent = "Sted: " + formdata.get("sted");
  outputBemaerk.textContent = "Andre bemærkninger: " + formdata.get("bemaerk");
  form.reset();
}
