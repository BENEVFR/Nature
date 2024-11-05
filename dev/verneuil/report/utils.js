function createMap(idElement, geodata_city, geodata_hex, property, lat, long, zoom = 13) {
  var map = L.map(idElement).setView([lat, long], zoom);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
  }).addTo(map);

  geojsonCityLayer = L.geoJson(geodata_city, {
    style: function(feature) {
      return {
        color: '#000000',
        fillColor: "#ffffff",
        fillOpacity: 0.5
      };
    }
  }).addTo(map);

  geojsonHexLayer = drawHex(geodata_hex, property).addTo(map);

  cartes.push({
    map: map,
    geojsonCityLayer: geojsonCityLayer,
    geojsonHexLayer: geojsonHexLayer,
    geodata_hex: geodata_hex
  });
}

function drawHex(geodata_hex, property) {
  geojsonHexLayer = L.geoJson(geodata_hex, {
    style: function(feature) {
      var color_property = property + '_color';
      var color = feature.properties[color_property];

      return {
        fillColor: color,
        weight: 1,
        opacity: 0.5,
        color: 'white',
        fillOpacity: 0.3,
        transition: 'fill-opacity 0.3s'
      };
    },
    onEachFeature: function(feature, layer) {
      if (feature.properties) {
        var popupContent = "<p><strong>Répondants:</strong> " + feature.properties.repondants + "</p>" + "<p><strong>" + property + ":</strong> " + feature.properties[property] + "</p>";

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
          this.openPopup();
          this.setStyle({ fillOpacity: 0.8 });
        });
        layer.on('mouseout', function() {
          this.closePopup();
          this.setStyle({ fillOpacity: 0.3 });
        });
      }
    }
  });

  return geojsonHexLayer;
}

function select_critere_change(property) {
  console.log("Update maps property");
  console.log(property);

  updateProperty(property);
}

function updateProperty(property) {
  cartes.forEach(function(carte) {
    carte.geojsonHexLayer.removeFrom(carte.map);
    carte.geojsonHexLayer = drawHex(carte.geodata_hex, property).addTo(carte.map);
  });
}

function changeOpacity() {
  var switchState = document.getElementById("hidemapinfos").checked;
  var opacityValue = switchState ? 1 : 0.5;

  cartes.forEach(function(carte) {
    carte.geojsonCityLayer.setStyle({ fillOpacity: opacityValue });
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Utils are Ready!");

  var elt = document.getElementsByClassName("nav-link")
  for (let index = 0; index < elt.length; index++) {
    elt[index].addEventListener("click", function() {
      window.dispatchEvent(new Event('resize'));
    });
  }
});
