import React, { Component } from 'react';
// import { VictoryChart, VictoryBar, VictoryAxis, VictoryContainer, VictoryLabel } from 'victory';
import { HorizontalBar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import '../../styles/HomeViewStyles/TechSkillsChart.css';

export default class TechSkillChart extends Component {
    state = {
        chartData: {},
        chartHeight: 0,
        maxLength: 0
    }

    componentDidMount() {
        // Google Charts
        // var chartData = []
        // chartData.push([
        //     'NamePlaceholder',
        //     'SkillLevel',
        //     {
        //         sourceColumn: 0,
        //         role: 'annotation',
        //         type: 'string',
        //         calc: 'stringify',
        //     },
        //     {
        //         role: 'style'
        //     }
        // ])
        // // var baseHeight = 34
        // // Allows space for each bar to be 25 pixels tall
        // var heightForBars = this.props.skillCategoryDetails.length * 45
        // // var totalChartHeight = baseHeight + heightForBars
        // var totalChartHeight = heightForBars
        // this.props.skillCategoryDetails.forEach((detail) => {
        //     chartData.push(['', detail.skillLevel, detail.skill, this.props.color])
        // })
        // this.setState({
        //     chartHeight: totalChartHeight,
        //     chartData: chartData
        // })


        // ChartJS 2
        var chartData = {}
        var labels = [];
        var data = [];
        var backgroundColors = [];
        var heightForBars = this.props.skillCategoryDetails.length * 30
        var baseHeight = 75;

        var totalChartHeight = heightForBars + baseHeight
        // var totalChartHeight = heightForBars
        var maxLength = 0;
        this.props.skillCategoryDetails.forEach((detail) => {
            if (detail.skill.length > maxLength)
                maxLength = detail.skill.length;
        })
        this.props.skillCategoryDetails.forEach((detail) => {
            var skillString = detail.skill
            for (var i = detail.skill.length; i <= maxLength; i++) {
                skillString += " "
            }
            console.log(skillString, skillString.length)
            labels.push(`${skillString}`)
            data.push(detail.skillLevel);
            backgroundColors.push(this.props.color);
        })
        chartData["labels"] = labels;
        chartData["datasets"] = [];
        chartData["datasets"].push({
            // barThickness: 20,
            barPercentage: 1,
            label: this.props.skillCategory,
            data: data,
            backgroundColor: backgroundColors,
        })
        this.setState({
            chartHeight: totalChartHeight,
            chartData: chartData,
            maxLength: maxLength
        })

    }

    render() {
        return (
            this.state.chartHeight === 0
                ? null
                :
                <div className="techSkillChartContainer" height={this.state.chartHeight} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                    <HorizontalBar
                        type={"horizontalBar"}
                        data={this.state.chartData}
                        // width={100}
                        height={this.state.chartHeight}
                        options={{
                            layout: {
                            },
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: this.props.skillCategory,
                                fontSize: 20,
                                fontFamily: 'Source Sans Pro',
                                fontColor: 'white'
                            },
                            plugins: {
                                datalabels: {
                                    display: false,
                                    // labels: {

                                    // },
                                    padding: 50,
                                    textShadowColor: 'red',
                                    color: 'orange',
                                    anchor: 'end',
                                    align: 'top',
                                    // formatter: Math.round,
                                    font: {
                                        weight: 'bold'
                                    }
                                }

                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'white',
                                        beginAtZero: true,
                                        min: 0,
                                        max: 5,
                                        mirror: true,
                                        padding: 5,
                                        stepSize: 1
                                    },
                                    gridLines: {
                                        color: 'white',
                                        drawBorder: false,

                                    },
                                    scaleLabel: {

                                    }

                                }],
                                yAxes: [{
                                    ticks: {
                                        fontColor: 'white',
                                        fontSize: 15,
                                        mirror: true,
                                        padding: -5,
                                        z: 1,

                                    },
                                    gridLines: {
                                        color: this.props.color,
                                        lineWidth: 3,
                                        drawOnChartArea: false,
                                        drawTicks: false,
                                        // display: false
                                    }
                                }]
                            },
                        }}
                    />
                    {/* <VictoryChart>
                        <VictoryBar
                            // barWidth={30}
                            barRatio={1}
                            data={this.props.skillCategoryDetails}
                            domainPadding={20}
                            horizontal
                            // domainPadding={{ x: [10, -10], y: 5 }}
                            // containerComponent={<VictoryContainer responsive={false} />}
                            labelComponent={<VictoryLabel dx={-75} />}
                            labels={({ datum }) => datum.skill}
                            // height={this.state.chartHeight}
                            // width={this.state.chartHeight}
                            // width={500}
                            x="skill"
                            y="skillLevel"
                            style={{
                                labels: { fill: 'white' },
                                data: { fill: this.props.color }
                            }}
                        />
                        <VictoryAxis
                            // tickValues specifies both the number of ticks and where
                            // they are placed on the axis
                            tickValues={[1, 2, 3, 4, 5]}
                        // tickFormat={[1, 2, 3, 4, 5]}
                        />
                        <VictoryAxis
                            dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        // tickFormat={(x) => (`$${x / 1000}k`)}
                        />

                    </VictoryChart> */}
                    {/* <Chart
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

                    />*/}
                </div>
        )
    }
}