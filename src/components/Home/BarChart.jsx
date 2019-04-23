import React from 'react'

import { Bar, Chart } from 'react-chartjs-2'

export default class MyChart extends React.Component {
    constructor (props) {
        super(props)
    
        // chart.js defaults
        Chart.defaults.global.defaultFontColor = '#000';
        Chart.defaults.global.defaultFontSize = 16;
      }

    formChart() {
        return {
            labels: ['a', 'b','c','d','e'],
            datasets: [
                {
                  label: "Hour done",
                  fill: true,
                  lineTension: 0.1,
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
                  data: ['1','2','3','4','5']
                }
              ]
        }
    }
    
    render() {
        return (
            <div>
                <Bar data={this.formChart()} />
            </div>
        );
    }
}