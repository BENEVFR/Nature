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

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM is Ready!");

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
