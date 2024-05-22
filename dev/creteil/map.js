var cartes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Maps are Ready!");

  const latitude = 48.783329;
  const longitude = 2.46667;

  createMap("map", geodata_creteil, geodata_hex, "critere_bien_etre_global", lat = latitude, long = longitude);
  createMap("map2", geodata_creteil, geodata_hex, "critere_bien_etre_global", lat = latitude, long = longitude);
  createMap("map3", geodata_creteil, geodata_hex, "critere_bien_etre_global", lat = latitude, long = longitude);
});
