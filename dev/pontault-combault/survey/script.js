document.addEventListener("DOMContentLoaded", function(event) {
  Swal.fire({
    title: "Bienvenue sur l'enquête Bien-Être",
    html: `
Mesdames, Messieurs, <br>La végétalisation et la préservation de la nature sont un axe prioritaire du développement de la ville. Afin d’évaluer les résultats des actions menées et prioriser les actions futures, nous vous remercions de bien vouloir répondre à cette enquête portant sur votre bien-être et votre perception de la nature à proximité de votre domicile. Cette enquête est réalisée avec l’aide de deux chercheuses et est entièrement anonyme.

Vous remerciant pour votre contribution,<br>
Bien cordialement,<br>
Votre maire
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
