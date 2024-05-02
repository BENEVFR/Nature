var map;
var geojsonLayerCreteil;

var gender_data = {
  labels: ["Homme", "Femme"],
  datasets: [{
    label: 'Note moyenne de bien-être',
    backgroundColor: ['blue', 'pink'],
    borderRadius: 5,
    data: [3.8, 4.2]
  }]
};

var age_data = {
  labels: ["0-18", "19-30", "31-50", "51+"],
  datasets: [{
    label: 'Note moyenne de bien-être',
    backgroundColor: ['orange', 'yellow', 'green', 'blue'],
    borderRadius: 5,
    data: [3.5, 3.9, 4.1, 3.7]
  }]
};

function redraw_map(property) {

  if (map) {
    map.remove();
  }

  map = L.map('map').setView([48.791100, 2.462800], 13); // Initialisation de la carte

  L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  ).addTo(map);

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

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      legend: {
        onClick: null
      }
    }
  };

  var ctx = document.getElementById('gender-chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: gender_data,
    options: options
  });

  var ctx2 = document.getElementById('age-chart').getContext('2d');
  var chart2 = new Chart(ctx2, {
    type: 'bar',
    data: age_data,
    options: options
  });
});

function select_change() {
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
