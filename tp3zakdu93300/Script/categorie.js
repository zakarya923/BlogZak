$(document).ready(TraitementChargementPage);

function TraitementChargementPage() {
  // Code pour cacher initialement tous les contenus de tous les éléments de toutes les catégories
  $('.mdl-card__supporting-text').hide();
  
  // Code pour associer à l'événement de cliquer sur le titre ou sur l'image d'un élément d'une catégorie ou sur l'image de l'élément, l'exécution de la fonction 'toggleContent'
  $('.mdl-card__title,.mdl-card__media').click(toggleContent)
}

// Fonction pour afficher le contenu le contenus de l'element  d'une categorie (s'il est cache) ou pour cacher le contenu  (s'il est affiche)
function toggleContent(event) {
  $(this).parent().find(".mdl-card__supporting-text").toggle();
}