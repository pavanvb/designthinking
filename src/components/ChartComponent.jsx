import React, { Component } from 'react'
import './components.styles.css'
import { Line } from 'react-chartjs-2'

class ChartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: "Sales for 2020(in M)",
                    data: [3, 2, 11, 6, 9],
                    borderColor: ['rgba(255,206,86,0.2'],
                    backgroundColor: ['rgba(255,206,86,0.2'],
                    pointBorderColor: ['rgba(255,206,86,0.2'],
                    pointBackgroundColor: ['rgba(255,206,86,0.2']
                },
                {
                    label: "Sales for 2019(in M)",
                    data: [1, 2, 3, 4, 5],
                    borderColor: ['rgba(54,162,235,0.2)'],
                    backgroundColor: ['rgba(54,162,235,0.2)'],
                    pointBorderColor: ['rgba(54,162,235,0.2)'],
                    pointBackgroundColor: ['rgba(54,162,235,0.2)']
                }
            ]
        }

        const options = {
            title: {
                display: true,
                text: "Analysis 1"
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 15,
                            stepSize: 1
                        }
                    }
                ]
            }
        }
        return (
            <Line data={data} options={options}/>
        )
    }
}

export default ChartComponent
