import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Mangaluru", "Bengaluru", "Coorg", "Bellary", "Badami"],
        datasets: [
          {
            label: "Population",
            data: [77180, 87790, 100203, 34500, 56400],
            backgroundColor: [
              "rgba(170,218,158,0.6)",
              "rgba(211,218,158,0.6)",
              "rgba(158,194,218,0.6)",
              "rgba(192,62,207,0.6)",
              "rgba(170,171,232,0.6)"
            ]
          }
        ]
      }
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };
  render() {
    return (
      <div className="chart">
        <h3>Chart Component</h3>

        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Lalle Population",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            maintainAspectRatio: false
          }}
        />
          <Line data={this.state.chartData}/>
          <Pie data={this.state.chartData}/>
      </div>
    );
  }
}

export default Chart;
