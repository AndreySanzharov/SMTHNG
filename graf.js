function graf(){
const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      //backgroundColor: ['red', 'yellow', 'green'],//
      data: [35, 20,  10, 7, 80, 90 ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}

graf();