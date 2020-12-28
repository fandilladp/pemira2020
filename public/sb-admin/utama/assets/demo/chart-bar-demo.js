// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("day1bar");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Teknik Informatika", "Teknik Elektro", "Teknik Biomedis", "Teknik Kimia", "Teknik Pangan", "Rekayasa Kehutanan", "Teknik Industri Pertanian", " Teknik Biosistem", "Teknik Industri", "Teknik Geologi", "Teknik Pertambangan", "Teknik Material", "Teknik Geofisika", "Teknik Mesin", "Teknik Telekomunikasi", "Teknik Sistem Energi", "Teknik Fisika"],
    datasets: [{
      label: "Pemilih",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [160, 205, 36, 160, 130, 63, 103, 61, 154, 93, 65, 45, 149, 93, 57, 89, 44],
    }],
  },
  
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'User'
        },
        gridLines: {
          display: true
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 300,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
var day2 = document.getElementById("day2bar");
var myLineChart = new Chart(day2, {
  type: 'bar',
  data: {
    labels: ["Farmasi", "Matematika", "Kimia", "SAK", "Fisika", "Biologi", "Sains Aktuaria", "Sains Data", "Sains Lingkungan Kelautan", "Teknik Sipil", "PWK", "Arsitektur", "Teknik Lingkungan", "Teknik Geomatika", "Teknik Kelautan", "DKV", "Arsitektur Lanskap", "Teknik Perkeretaapian"],
    datasets: [{
      label: "Pemilih",
      backgroundColor: "rgb(244, 133, 14)",
      borderColor: "rgba(244,133,14,1)",
      data: [229, 252, 118, 102, 56, 78, 116, 61, 38, 529, 205, 177, 254, 307, 54, 44, 10, 30],
    }],
  },
  
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'User'
        },
        gridLines: {
          display: true
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 550,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
