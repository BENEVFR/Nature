var cartes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Maps are Ready!");

  const latitude = 48.783329; /*Remplacez ici la latitude de la ville*/
  const longitude = 2.46667;  /*Remplacez ici la longitude de la ville*/

  /* */
  /*Ajoutez des cartes dans le rapport*/
  /* */
  createMap(
    idElement = "map",
    geodata_city = geodata_creteil,
    geodata_hex = geodata_hex,
    property = "critere_bien_etre_global",
    lat = latitude,
    long = longitude
  );

  createMap(
    idElement = "map2",
    geodata_city = geodata_creteil,
    geodata_hex = geodata_hex,
    property = "critere_bien_etre_global",
    lat = latitude,
    long = longitude
  );

  createMap(
    idElement = "map3",
    geodata_city = geodata_creteil,
    geodata_hex = geodata_hex,
    property = "critere_bien_etre_global",
    lat = latitude,
    long = longitude
  );
});
