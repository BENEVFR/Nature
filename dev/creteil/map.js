var cartes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Maps are Ready!");

  createMap("map", geodata_creteil, geodata_hex, "critere_bien_etre_global");
  createMap("map2", geodata_creteil, geodata_hex, "critere_bien_etre_global");
  createMap("map3", geodata_creteil, geodata_hex, "critere_bien_etre_global");
});
