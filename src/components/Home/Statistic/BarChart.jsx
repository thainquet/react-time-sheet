import React from 'react'

import { Bar, Chart } from 'react-chartjs-2'

import { tasks as data } from '../../../assets/simulatedAPI'

const dateForCreatingChart = [];
const datasetForCreatingChart = [];

data.data.forEach( i => {
    dateForCreatingChart.push(i.date)
})
data.data.forEach(i => {
    datasetForCreatingChart.push(i.hours)
})

const chartOption = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                stepValue: 0.5,
            }
        }]
    }
}

export default class MyChart extends React.Component {
    constructor (props) {
        super(props)
    
        // chart.js defaults
        Chart.defaults.global.defaultFontColor = '#000';
        Chart.defaults.global.defaultFontSize = 16;
      }

    formChart() {
        return {
            labels: dateForCreatingChart,
            datasets: [
                {
                  label: "Hour done",
                  fill: true,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: datasetForCreatingChart
                }
              ]
        }
    }
    
    render() {
        return (
            <div>
                <Bar data={this.formChart()} options={ chartOption }/>
            </div>
        );
    }
}