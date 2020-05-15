import React, { Component } from 'react';
import Chart from 'react-google-charts';
import '../../styles/HomeViewStyles/TechSkillsChart.css';

export default class TechSkillChart extends Component {
    state = {
        chartData: [],
        chartHeight: 0
    }

    componentDidMount() {
        var chartData = []
        chartData.push([
            'NamePlaceholder',
            'SkillLevel',
            {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify',
            },
            {
                role: 'style'
            }
        ])
        var baseHeight = 34
        // Allows space for each bar to be 25 pixels tall
        var heightForBars = this.props.skillCategoryDetails.length * 45
        var totalChartHeight = baseHeight + heightForBars
        this.props.skillCategoryDetails.forEach((detail) => {
            chartData.push(['', detail.skillLevel, detail.skill, this.props.color])
        })
        console.log(this.props.skillCategoryDetails.length, heightForBars, totalChartHeight)
        this.setState({
            chartHeight: totalChartHeight,
            chartData: chartData
        })
    }

    render() {
        return (
            this.state.chartHeight === 0
                ? null
                : <div className="techSkillChartContainer" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000">
                    {console.log(this.state.chartHeight)}
                    <Chart
                        chartType="BarChart"
                        data={this.state.chartData}
                        colors={["red"]}
                        height={this.state.chartHeight + "px"}
                        options={{
                            animation: {
                                startup: true,
                                // duration: 1500,
                                // easing: "out"
                            },
                            annotations: {
                                textStyle: {
                                    fontSize: 14
                                },
                            },
                            chartArea: {
                                left: 0,
                                top: "30%",
                                width: "100%",
                                height: "80%"
                            },
                            title: this.props.skillCategory,
                            titleTextStyle: {
                                color: "white",
                                fontSize: 20,
                            },
                            legend: { position: 'none' },
                            backgroundColor: "transparent",
                            // chartArea: { width: '50%' },
                            // bar: { groupWidth: '35%' },
                            hAxis: {
                                // title: this.props.skillCategory,
                                minValue: 0,
                                maxValue: 5,
                                baselineColor: "orange",
                                gridlines: {
                                    color: 'green',
                                    count: 2,
                                },
                            },
                        }}

                    />
                </div>
        )
    }
}