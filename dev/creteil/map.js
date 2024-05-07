var map;
var map2;
var geojsonLayerCreteil;

function redraw_map(property) {

  if (map) {
    map.remove();
  }

  if (map2) {
    map2.remove();
  }

  map = L.map('map').setView([48.791100, 2.462800], 13); // Initialisation de la carte
  map2 = L.map('map2').setView([48.791100, 2.462800], 13); // Initialisation de la carte
  map3 = L.map('map3').setView([48.791100, 2.462800], 13); // Initialisation de la carte

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
    }
  ).addTo(map);

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
    }
  ).addTo(map2);

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
    }
  ).addTo(map3);

  geojsonLayerCreteil = L.geoJson(geodata_creteil, {

    style: function(feature) {
      return {
        color: '#000000',
        fillColor: "#ffffff",
        fillOpacity: 0.5
      };
    },

  }).addTo(map);

  var geojsonLayer = L.geoJson(geodata_hex, {

    style: function(feature) {

      var color_property = property + '_color';
      var color = feature.properties[color_property];

      return {
        fillColor: color,
        weight: 1,
        opacity: 0.5,
        color: 'white',
        fillOpacity: 0.3,
        transition: 'fill-opacity 0.3s' // Ajout de transition
      };
    },

    onEachFeature: function(feature, layer) {
      if (feature.properties) {
        var popupContent = "<p><strong>ID:</strong> " + feature.properties.id + "</p>" + "<p><strong>" + property + ":</strong> " + feature.properties[property] + "</p>";

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
  }).addTo(map);

}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM is Ready!");

  redraw_map('critere_bien_etre');

    var elt = document.getElementsByClassName("nav-link")

for (let index = 0; index < elt.length; index++) {
    elt[index].addEventListener("click", function() {window.dispatchEvent(new Event('resize'));})
}
});

function select_critere_change() {
  var x = document.getElementById("my_select").value;
  console.log(x);

  redraw_map(x);
  document.getElementById("hidemapinfos").checked = false;



};

function changeOpacity() {
  var switchState = document.getElementById("hidemapinfos").checked;
  var opacityValue = switchState ? 1 : 0.5;
  geojsonLayerCreteil.setStyle({ fillOpacity: opacityValue });
}

