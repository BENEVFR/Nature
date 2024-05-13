var carte1;
var carte2;
var carte3;

function createMap(idElement, geodata_city, geodata_hex, property, zoom = 13) {

  var map = L.map(idElement).setView([48.791100, 2.462800], zoom);

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

  return {
    map: map,
    geojsonCityLayer: geojsonCityLayer,
    geojsonHexLayer: geojsonHexLayer
  };
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
  });

  return geojsonHexLayer;
}



document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM is Ready!");

  carte1 = createMap("map", geodata_creteil, geodata_hex, "critere_bien_etre");
  carte2 = createMap("map2", geodata_creteil, geodata_hex, "critere_bien_etre");
  carte3 = createMap("map3", geodata_creteil, geodata_hex, "critere_bien_etre");

  var elt = document.getElementsByClassName("nav-link")
  for (let index = 0; index < elt.length; index++) {
    elt[index].addEventListener("click", function() {
      window.dispatchEvent(new Event('resize'));
    });
  }
});

function select_critere_change() {
  var x = document.getElementById("my_select").value;
  console.log(x);

  updateProperty(x);
};

function updateProperty(property) {
  carte1.geojsonHexLayer.removeFrom(carte1.map);
  carte2.geojsonHexLayer.removeFrom(carte2.map);
  carte3.geojsonHexLayer.removeFrom(carte3.map);

  carte1.geojsonHexLayer = drawHex(geodata_hex, property).addTo(carte1.map);
  carte2.geojsonHexLayer = drawHex(geodata_hex, property).addTo(carte2.map);
  carte3.geojsonHexLayer = drawHex(geodata_hex, property).addTo(carte3.map);
}

function changeOpacity() {
  var switchState = document.getElementById("hidemapinfos").checked;
  var opacityValue = switchState ? 1 : 0.5;

  carte1.geojsonCityLayer.setStyle({ fillOpacity: opacityValue });
  carte2.geojsonCityLayer.setStyle({ fillOpacity: opacityValue });
  carte3.geojsonCityLayer.setStyle({ fillOpacity: opacityValue });
}

