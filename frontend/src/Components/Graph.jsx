import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x',  'Progress'],
  [0, 0],
  [1,  5],
  [2,  15],
  [3,  9],
  [4,  10],
  [5,  5],
  [6,  3],
  [7, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Progress',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Your Progress</h2>
        <Chart
          width={'850px'}
          height={'200px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default MultiLineChart