import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent';
import HeadingComponent from './components/HeadingComponent';
import ParticlesComponent from './components/ParticlesComponent';
import NavBarComponent from './components/NavBarComponent';
import ChartComponent from './components/ChartComponent';


function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <HeadingComponent name="Design Thinking Phase 3"/>
      <ParticlesComponent />
      <CarouselComponent />
      <HeadingComponent name="Data Plots (Data Analytics)"/>
      <div className="chart1" id="chart">
        <ChartComponent />
      </div>

    </div>
  );
}

export default App;
