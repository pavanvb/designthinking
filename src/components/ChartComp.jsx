import React from 'react'
import './components.styles.css'
import {Line} from 'react-chartjs-2'

function ChartComponent(props) {
    return (
        <Line data={props.data} options={props.options} />

    )

}

export default ChartComponent
