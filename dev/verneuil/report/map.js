var cartes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Maps are Ready!");

  const latitude = 48.985335; /*Remplacez ici la latitude de la ville*/
  const longitude = 1.963700;  /*Remplacez ici la longitude de la ville*/

  /* */
  /*Ajoutez des cartes dans le rapport*/
  /* */

  createMap(
    idElement = "map",
    geodata_city = geodata_city, /*Pas besoin de modifier*/
    geodata_hex = geodata_dataset,
    property = "critere_bien_etre_global", /*Pas besoin de modifier*/
    lat = latitude, /*Pas besoin de modifier*/
    long = longitude /*Pas besoin de modifier*/
  );

  createMap(
    idElement = "map2",
    geodata_city = geodata_city, /*Pas besoin de modifier*/
    geodata_hex = geodata_dataset_souspop,
    property = "critere_bien_etre_global", /*Pas besoin de modifier*/
    lat = latitude, /*Pas besoin de modifier*/
    long = longitude /*Pas besoin de modifier*/
  );

  createMap(
    idElement = "map3",
    geodata_city = geodata_city, /*Pas besoin de modifier*/
    geodata_hex = geodata_dataset_souspop2,
    property = "critere_bien_etre_global", /*Pas besoin de modifier*/
    lat = latitude, /*Pas besoin de modifier*/
    long = longitude /*Pas besoin de modifier*/
  );
});
