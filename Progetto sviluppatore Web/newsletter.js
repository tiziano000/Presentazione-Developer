const form = document.querySelector("#modulo form");
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const email = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (controllaNome(nome)) {
    nome.classList.remove("errore");
    nome.nextElementSibling.classList.remove("messaggio");
    nome.nextElementSibling.innerHTML = "";
  } else {
    nome.classList.add("errore");
    nome.nextElementSibling.classList.add("messaggio");
    nome.nextElementSibling.innerHTML = "Il campo Nome e' obbligatorio";
  }
  if (controllaNome(cognome)) {
    cognome.classList.remove("errore");
    cognome.nextElementSibling.classList.remove("messaggio");
    cognome.nextElementSibling.innerHTML = "";
  } else {
    cognome.classList.add("errore");
    cognome.nextElementSibling.classList.add("messaggio");
    cognome.nextElementSibling.innerHTML = "Il campo Cognome e' obbligatorio";
  }
  if (controllaEmail(email)) {
    email.classList.remove("errore");
    email.nextElementSibling.classList.remove("messaggio");
    email.nextElementSibling.innerHTML = "";
  } else {
    email.classList.add("errore");
    email.nextElementSibling.classList.add("messaggio");
    email.nextElementSibling.innerHTML = "Il campo Mail e' obbligatorio";
  }
  const errori = document.querySelectorAll(".errore");
  if (errori.length == 0) {
    this.submit();
  }
});

function controllaNome(nome) {
  const regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(nome.value.trim());
}
function controllaEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email.value.trim());
}
