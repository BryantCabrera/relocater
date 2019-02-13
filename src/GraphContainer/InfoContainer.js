import React, { Component } from 'react';
import LineGraph from './LineGraph'
import GraphContainer from './GraphContainer'
import data from '../data/db.json'



class InfoContainer extends Component {
    render = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].County == this.props.countyName ) {
                return (
                    <div>
                        <h2>Population {data[i].Population}</h2>
                        <h2>Unemployment Rate {data[i].Unemployment_Rate}%</h2>
                        <h2>Average House Cost ${data[i].Avg_Home_Price}</h2>
                        <h2>Median Age {data[i].Median_Age}</h2>
                        <h2>Living Wage ${data[i].Living_Wage}</h2>
                        <h2>Poverty Wage ${data[i].Poverty_Wage}</h2> 
                    </div>
                )
            }                      
        }  
    }
}

export default InfoContainer