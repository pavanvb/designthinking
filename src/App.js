import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent';
import HeadingComponent from './components/HeadingComponent';
import ParticlesComponent from './components/ParticlesComponent';
import NavBarComponent from './components/NavBarComponent';
import ChartComponent from './components/ChartComp.jsx'
import IconComponent from './components/IconComponent.jsx'
import { PlotData_1 as PData1 } from './components/PlotData'
import { PlotData_2 as PData2 } from './components/PlotData'
import axios from 'axios';


class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      plotData1: [],
      plotData2: [],
      agriData: [],
      x: 0,
      i: 0
    }
  }

  componentDidMount() {

    this.setState({ plotData1: PData1 })
    this.setState({ plotData2: PData2 })
    setInterval(() => {
      if (this.state.i > 15) return;
      else
        axios.get(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=${this.state.x}&limit=10`)
          .then(response => {
            this.setState({
              agriData: this.state.agriData.concat(response.data.records),
              x: this.state.x + 10,
              i: this.state.i + 1
            });
          })
          .catch(error => console.log(error))
    },
      2500
    )
  }

  render() {

    const { plotData1, plotData2, agriData } = this.state;

    const filteredAgriData = agriData.filter(data => {
      if (data.commodity === "Tomato")
        return data;
    });

    const minPriceOfTomato = filteredAgriData.map(data => data.min_price);
    const maxPriceOfTomato = filteredAgriData.map(data => data.max_price);
    const modalPriceOfTomato = filteredAgriData.map(data => data.modal_price);
    const districtData = filteredAgriData.map(data => data.district);

    const soilFertilityArray1 = plotData1.map(ele => ele.soil_fertility);
    const totalRevenueArray1 = plotData1.map(ele => ele.total_revenue);

    const soilFertilityArray2 = plotData2.map(ele => ele.soil_fertility);
    const revenueDueToWheat2 = plotData2.map(ele => ele.revenue_earned_from_wheat);
    const revenueDueToGram2 = plotData2.map(ele => ele.revenue_earned_from_gram);
    const totalRevenueArray2 = plotData2.map(ele => ele.total_revenue);

    const data3 = {
      labels: districtData,
      datasets: [
        {
          label: "MinPriceOfTomato(in INR)",
          data: minPriceOfTomato,
          borderColor: ['rgba(100,206,86,0.2'],
          backgroundColor: ['rgba(100,206,86,0.2'],
          pointBorderColor: ['rgba(100,206,86,0.2'],
          pointBackgroundColor: ['rgba(100,206,86,0.2'],
          pointHoverRadius: 5
        },
        {
          label: "MaxPriceOfTomato(in INR)",
          data: maxPriceOfTomato,
          borderColor: ['rgba(400,100,50,0.2'],
          backgroundColor: ['rgba(400,100,50,0.2'],
          pointBorderColor: ['rgba(400,100,50,0.2'],
          pointBackgroundColor: ['rgba(400,100,50,0.2'],
          pointHoverRadius: 5
        },
        {
          label: "ModalPriceOfTomato(in INR)",
          data: modalPriceOfTomato,
          borderColor: ['rgba(200,206,86,0.2'],
          backgroundColor: ['rgba(200,206,86,0.2'],
          pointBorderColor: ['rgba(200,206,86,0.2'],
          pointBackgroundColor: ['rgba(200,206,86,0.2'],
          pointHoverRadius: 5
        }

      ]
    }

    const options3 = {
      title: {
        display: true,
        text: "Variations in prices(in INR) of tomato in various markets"
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Price per 100kg'
            },
            ticks: {
              min: 0,
            }
          }
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Districts'
          }
        }]
      }
    }

    const data2 = {
      labels: soilFertilityArray2,
      datasets: [
        {
          label: "Total Revenue(in INR)",
          data: totalRevenueArray2,
          borderColor: ['rgba(200,206,86,0.2'],
          backgroundColor: ['rgba(200,206,86,0.2'],
          pointBorderColor: ['rgba(200,206,86,0.2'],
          pointBackgroundColor: ['rgba(200,206,86,0.2'],
          pointHoverRadius: 5
        },
        {
          label: "Revenue from wheat(in INR)",
          data: revenueDueToWheat2,
          borderColor: ['rgba(100,206,86,0.2'],
          backgroundColor: ['rgba(100,206,86,0.2'],
          pointBorderColor: ['rgba(100,206,86,0.2'],
          pointBackgroundColor: ['rgba(100,206,86,0.2'],
          pointHoverRadius: 5
        },
        {
          label: "Revenue from Gram(in INR)",
          data: revenueDueToGram2,
          borderColor: ['rgba(300,206,86,0.2'],
          backgroundColor: ['rgba(300,206,86,0.2'],
          pointBorderColor: ['rgba(300,206,86,0.2'],
          pointBackgroundColor: ['rgba(300,206,86,0.2'],
          pointHoverRadius: 5
        }
      ]
    }

    const data1 = {
      labels: soilFertilityArray1,
      datasets: [
        {
          label: "Revenue without MultiCropping(wheat)",
          data: totalRevenueArray1,
          borderColor: ['rgba(255,206,86,0.2'],
          backgroundColor: ['rgba(255,206,86,0.2'],
          pointBorderColor: ['rgba(255,206,86,0.2'],
          pointBackgroundColor: ['rgba(255,206,86,0.2'],
          pointHoverRadius: 5
        }
      ]
    }

    const options12 = {
      title: {
        display: true,
        text: "Soil Fertility(in %) v/s Total revenue(in INR)"
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Revenue (in INR)'
            },
            ticks: {
              min: 0,
            }
          }
        ],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Soil Fertility(in %)'
          }
        }]
      }
    }

    return (
      <div className="App">
        <NavBarComponent />
        <HeadingComponent name="Design Thinking Phase 3" />
        <ParticlesComponent />
        <CarouselComponent />
        <HeadingComponent name="Data Plots (Data Analytics)" />
        <div className="chart1" id="chart">
          <ChartComponent data={data1} options={options12} />
        </div>
        <div className="chart2" id="chart">
          <ChartComponent data={data2} options={options12} />
        </div>
        <div className="chart3" id="chart">
          <ChartComponent data={data3} options={options3} />
        </div>
        <h1 className="built-using" id="built-using">Built Using ReactJS, NodeJS, NPM</h1>
        <div className="icon" >
          <IconComponent />
        </div>
      </div >

    )

  }
}

export default App;
