$(document).ready(TraitementChargementPage);


function TraitementChargementPage() {
  // Ajoutez du code ici pour associer a l'evenement de cliquer sur le bouton "submit"  l'execution de la fonction 'checkEmails' ou

  $('form').submit(checkEmails);
}

// Fonction pour verifier  si les deux adresses sont identiques et definir le message d'erreur Ã  afficher si la condition n'est pas respectee.
function checkEmails(event) {
  if ($("#courriel").val() != $("#confcourriel").val()) {
    event.preventDefault();
    document
      .getElementById("confcourriel")
      .setCustomValidity(
        "Les deux adresses de courriel  doivent etre identiques."
      );

  } else {
    document.getElementById("confcourriel").setCustomValidity("");
  }
}