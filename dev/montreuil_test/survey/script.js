document.addEventListener("DOMContentLoaded", function(event) {
  Swal.fire({
    title: "Bienvenue sur l'enquête Bien-Être",
    html: `
      En répondant à ce questionnaire, vos <b>données sont collectées et conservées anonymement</b> à des fins de recherche et de consultation. <br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum egestas sapien, eget commodo leo finibus vel. Curabitur nibh turpis, suscipit quis vestibulum vitae, suscipit vel ex. Proin consectetur finibus felis id semper. Curabitur rhoncus maximus magna in dictum. Donec in erat nec tellus varius tristique eget eu augue. Etiam commodo, est eu porta ornare, justo urna luctus massa, a ornare nunc enim in augue. Nulla id sollicitudin ante, in malesuada ex. Nulla tortor urna, sagittis quis pellentesque et, cursus non tellus.
    `,
    showDenyButton: true,
    confirmButtonText: "J'ai compris",
    denyButtonText: "Je refuse le traitement de mes données"
  }).then((result) => {

    if (result.isConfirmed) {
      /*Swal.fire("Saved!", "", "success");*/
    } else if (result.isDenied) {
      Swal.fire({
        title: "Vous avez refusé le traitement de vos données",
        html: `
          La page est maintenant inactive. <br><br>
          Rafraîchissez la page si vous souhaitez changer d'avis
        `,
        icon: "error",
        showConfirmButton: false,
        allowOutsideClick: false,
        showCloseButton: false,
        allowEscapeKey: false
      });

      map = document.getElementById("map");
      map.parentNode.removeChild(map);
    }
});
});
