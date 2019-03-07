import React, {Component} from 'react';
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';
import { csvParse } from 'd3-dsv';
import axios from 'axios';
import {PieChart,LineChart} from 'react-easy-chart';
import {Container, Col, Row} from 'react-bootstrap';
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem
} from '@progress/kendo-react-charts';
import 'hammerjs';

const width = 960,
  height = 500,
  radius = Math.min(width, height) / 2;

const color = scaleOrdinal().range([
  '#98abc5',
  '#8a89a6',
  '#7b6888',
  '#6b486b',
  '#a05d56',
  '#d0743c',
  '#ff8c00',
]);

const arc = d3Arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 70);

const pie = d3Pie()
  .sort(null)
  .value(function(d) {
    return d.population;
  });

// const data = pie(
//   csvParse(dataCsv, d => {
//     d.population = +d.population;
//     return d;
//   })
// );

// <DonutChart/>
export default class PieChartNew extends Component {
    constructor(props){
        super(props);
        this.state ={
            chart :[],
 
        }
    }
 
    componentDidMount(){
         axios.get('http://localhost:3001/pythonscript')
         .then(res => {
             const chart = res.data;
             this.setState({ chart });
            //  console.log(this.state.chart);
         })
         
    }
    render(){
        const {chart} = this.state;

        console.log(chart);
var singleObject = {};

for(var i in chart){
    var oKeys = Object.keys(chart[i]);
    for(var j in oKeys){
        singleObject[oKeys[j]] = chart[i][oKeys[j]];
    }
}
// console.log(singleObject);
const chartData = Object.keys(singleObject).map(function(key) {
    return ( {key : (key), value :singleObject[key]} ) ;
  });
  console.log(chartData);

  const lineData = Object.keys(singleObject).map(function(key) {
    return ( {x : (key), y :singleObject[key]} ) ;
  });

//   

//console.log(arr);

  // console.log(lineData);

const line = [lineData];
console.log(line);

  //convert array of objects to array of arrays
  // var output = lineData.map(function(obj) {
  //   return Object.keys(obj).sort().map(function(key) { 
  //     return obj[key];
  //   });
  // });

  // console.log(output);
  

 
  return (
    
      
    <div>  
      

    <Chart seriesColors={['orange', 'lightblue','yellow']}>
    <ChartLegend position="top" />
    <ChartSeries>
      <ChartSeriesItem type="pie" data={chartData} field="value" categoryField="key" />
    </ChartSeries>
  </Chart>
    {/* <PieChart
 labels 
size={300}
data={chartData}
styles={{
  '.chart_text': {
    fontSize: '1em',
    fill: '#fff'
  }
}}
/> */}
  
    {/* <LineChart

    verticalGrid
    lineColors={['pink', 'cyan']}
    xType={'text'}
    axes
    width={300}
    height={250}
    interpolate={'cardinal'}
    data={ line }
  /> */}


  
 

{/* <PieChart
 labels 
size={200}
data={chartData}
styles={{
  '.chart_text': {
    fontSize: '1em',
    fill: '#fff'
  }
}}
/>
<div>
<LineChart
    xType={'text'}
    axes
    width={350}
    height={350}
    interpolate={'cardinal'}
    data={ line }
  /> */}

{/* </div> */}
</div>


    // <svg width={width} height={height}>
    //   <g transform={`translate(${width / 2}, ${height / 2})`}>
    //     {chartData.map(d => (
    //       <g className="arc" key={`a${d.value}`}>
    //         <path d={arc(d)} fill={color(d.value)} />
    //         <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
    //           {d.value}
    //         </text>
    //       </g>
    //     ))}
    //   </g>
    // </svg>
  );
}}