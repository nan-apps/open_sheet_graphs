export default {	
	type: '',
	responsive: true,					
	data:{
		labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 100, 54, 1)',
                'rgba(255, 159, 4, 1)',
                'rgba(255, 15, 6, 1)',
                'rgba(255, 59, 64, 1)',
                'rgba(255, 99, 244, 1)',
            ],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        scales: {
        	xAxes: [{
                ticks: {                	
                    beginAtZero:true,
                    stepSize:10                 
                }
            }],
            yAxes: [{
                ticks: {                	
                    beginAtZero:true,
                    stepSize:10
                }
            }]
        }
	}

}