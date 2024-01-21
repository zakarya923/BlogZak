$(document).ready(TraitementChargementPage);

function TraitementChargementPage() {
  // parametres pour l'affichage de la date
  var options = { year: "numeric", month: "long", day: "numeric" },
    // obtention de la date du jour
    d = new Date(),
    // localisation de la date en franÃ§ais du Canada avec les options de l'affichage
    datefrancais = d.toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    dateAttribut = d.toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    // Chaine qui sera affichee
    dateAffichee = "Le " + datefrancais;

  // Ajoutez du code ici pour  inserer la date qui est dans la variable dateAffichee dans l'element qui affiche la date
  $('time').text(dateAffichee);

  // Ajoutez du code ici pour ajouter le contenu de la variable dateAttribut dans l'attribut "datetime" de l'element qui affiche la date
  $('time').attr('datetime', dateAttribut);

}