import React from 'react'
import './App.css'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'

function App () {
  return (
    <div className='App'>
      <div className='chart'>
        {/* <LineChart /> */}
        {/* <BarChart /> */}
        <DoughnutChart />
      </div>
    </div>
  )
}

export default App
