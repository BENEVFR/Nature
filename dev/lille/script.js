function askConfirmation() {

    var confirmation = confirm("En répondant à ce questionnaire, vos données sont collectées et conservées anonymement à des fins de recherche et de consultation.");

    if (!confirmation) {
      alert("Vous n'avez pas confirmé. La page est maintenant inactive.");
      map = document.getElementById("map");
      map.parentNode.removeChild(map);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
  askConfirmation();
});
