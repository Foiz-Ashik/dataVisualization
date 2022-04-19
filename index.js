var barChart = document.getElementById("barChart").getContext('2d');

var barChart = new Chart(barChart, {
    type:'bar',
    data:{
        labels:['Male', 'Female', 'Hispanic', 'Black', 'White', 'Asian'],
        datasets:[{
            label:'Demographic in Percentage',
            data:[
                25435,
                20375,
                23259,
                19447,
                4845,
                3690

            ],
            backgroundColor:[
                'rgba(234, 16, 129, 0.8)',
                'rgba(99, 12, 239, 0.8)',
                'rgba(34, 233, 247, 0.8)',
                'rgba(67, 255, 77, 0.92)',
                'rgba(243, 8, 87, 0.92)',
                'rgba(232, 62, 93, 1)'

            ]
        }]
    },
    options:[]

});

var pieChart = document.getElementById("pieChart").getContext('2d');

var pieChart = new Chart(pieChart, {
    type:'pie',
    data:{
        labels:['Male', 'Female', 'Hispanic', 'Black', 'White', 'Asian'],
        datasets:[{
            label:'Demographic in Percentage',
            data:[
                25435,
                20375,
                23259,
                19447,
                4845,
                3690

            ],
            backgroundColor:[
                'rgba(234, 16, 129, 0.8)',
                'rgba(99, 12, 239, 0.8)',
                'rgba(34, 233, 247, 0.8)',
                'rgba(67, 255, 77, 0.92)',
                'rgba(243, 8, 87, 0.92)',
                'rgba(232, 62, 93, 1)'

            ]
        }]
    },
    options:[]

});
