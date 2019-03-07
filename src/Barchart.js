import React, {Component} from 'react';
import axios from 'axios';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';


export default class Barchart extends Component {
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
    <ChartTitle text="Retweets based on Location" />
    <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories}>
          <ChartCategoryAxisTitle text="Location" />
        </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
        <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={line1} />
        <ChartSeriesItem type="bar" data={line2} />
   
    </ChartSeries>
  </Chart>
            </div>
        )
    }
}