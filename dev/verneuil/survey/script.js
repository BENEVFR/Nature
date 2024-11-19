document.addEventListener("DOMContentLoaded", function(event) {
  Swal.fire({
   title: "<strong>Bienvenue sur l'enquête Bien-Être et Nature en ville.</strong>",
    html: `
      <p style="font-size: 1.1em; line-height: 1.5em;">
        <strong>Mesdames, Messieurs,</strong><br><br>
        La végétalisation et la préservation de la nature sont un axe prioritaire du développement de la ville.
        Afin d’évaluer les résultats des actions menées et prioriser les actions futures, nous vous remercions de bien vouloir répondre
        à cette enquête portant sur votre bien-être et votre perception de la nature à proximité de votre domicile.<br><br>
        Cette enquête est réalisée avec l’aide de deux chercheuses et est <strong>entièrement anonyme</strong>.
      </p>
      <p style="font-size: 1.1em; line-height: 1.5em; margin-top: 20px;">
        Si vous acceptez de participer à notre enquête, merci de cliquer sur "<strong>J'ai compris</strong>"
        puis de <strong>localiser votre lieu de résidence sur la carte qui s'affiche</strong>.
      </p>
      <p style="font-size: 1.1em; line-height: 1.5em; margin-top: 20px;">
        Vous remerciant pour votre contribution,<br>
        <strong>Bien cordialement,</strong><br>
        <em>Votre maire</em>
      </p>
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
