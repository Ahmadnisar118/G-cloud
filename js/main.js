var ctx = document.getElementById('analytics').getContext("2d");

var gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
gradientFill.addColorStop(0, "rgba(75, 95, 234, .6)");
gradientFill.addColorStop(1, "rgba(75, 95, 234, 0.1)");

Chart.defaults.global.defaultFontColor = "black";

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Sep","Oct","Nov","Dec"],
        datasets: [{
            borderColor: '#4B5FEA',
            pointBorderColor: "#4B5FEA",
            pointBackgroundColor: "#4B5FEA",
            pointBorderWidth: 5,
            pointRadius: 1,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 3,
            data: [50,100,200,250,150,200,250,200,100,50,150]
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
        },
        maintainAspectRatio: false
    }
    
});

function doDrop(id) {
    if (document.getElementById(id).style.height == "0px") {
        document.getElementById(id).style.height = "auto";
        document.getElementById(id).style.margin = "10px 0 10px 0";
    
    }
    else {
        document.getElementById(id).style.height = "0px";
        document.getElementById(id).style.margin = "0";
    }
}
