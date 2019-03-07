import React, {Component} from 'react';
import axios from 'axios';
import { VectorMap } from 'react-jvectormap';
import { countries} from 'country-list';


export default class WorldMap extends Component {
    constructor(props){
        super(props);
        this.state ={
            mapData1: [],

        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/globalchart')
        .then(res => {
            const mapData1 = res.data;
            this.setState({ mapData1 });
            console.log(res.data);
        })

    }

    render(){
    const { mapData1} = this.state;
    let rts = mapData1.map((obj) => {
        return obj.RTs;
            })
            let location = mapData1.map((obj) => {
                return obj.Location;
                    })
       
              
   
        let mapData = {
            CN: 100000,
            IN: 9900,
            SA: 86,
            EG: 70,
            SE: 0,
            FI: 0,
            FR: 0,
            US: 20,
          };
        
        return (
            <div>
            <VectorMap
      map={"world_mill"}
      backgroundColor="transparent" //change it to blue !!!
      zoomOnScroll={false}
      containerStyle={{
        width: "100%",
        height: "520px"
      }}
       //gets the country code
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: 'pointer'
        },
        selected: {
          fill: '#2938bc'  //what colour clicked country will be
        },
        selectedHover: {
        }      
      }}
      regionsSelectable={true}
      series={{
        regions: [
          {
            values: mapData,  //this is your data
            scale: ["#146804", "#ff0000"],  //your color game's here
            normalizeFunction: "polynomial"
          }
        ]
      }}
    />
            </div>
        )
    }
}
