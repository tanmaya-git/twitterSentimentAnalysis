import React, {Component} from 'react';
import axios from 'axios';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
  } from '@progress/kendo-react-charts';

export default class Linechart extends Component {
    constructor(props){
        super(props);
        this.state = {
            linedata : [],

        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/globalchart')
                .then(res => {
                    const linedata = res.data;
                    console.log(res.data);
                    this.setState({ linedata });
                })

    }
    render(){


        let categories = this.state.linedata.map((obj) => {
            return obj.Location;
                })
                console.log(categories);
                let line1 = this.state.linedata.map((obj) => {
                    return obj.RTs;
                        })
                        console.log(line1);
                        let line2 = this.state.linedata.map((obj) => {
                            return obj.SA;
                                })
                                console.log(line2);
        return(
            <div>
                <Chart>
    <ChartTitle text="" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem title={{ text: 'Location'}} categories={categories} />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem type="line" data={line1} />
      <ChartSeriesItem type="line" data={line2} />
      
    </ChartSeries>
  </Chart>
            </div>
        )
    }
}