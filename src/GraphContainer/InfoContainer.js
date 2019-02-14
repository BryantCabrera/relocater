import React, { Component } from 'react';
import data from '../data/db.json'
import './InfoContainer.css'

class InfoContainer extends Component {
    render = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].County == this.props.countyName ) {
                return (
                    <div>
                        <h2 className="info-container-items">Population <br></br>{data[i].Population}</h2>
                        <h2 className="info-container-items">Unemployment Rate <br></br>{data[i].Unemployment_Rate}%</h2>
                        <h2 className="info-container-items">Average House Cost<br></br> ${data[i].Avg_Home_Price}</h2>
                        <h2 className="info-container-items">Median Age<br></br> {data[i].Median_Age}</h2>
                        <h2 className="info-container-items">Living Wage<br></br> ${data[i].Living_Wage}</h2>
                        <h2 className="info-container-items">Poverty Wage<br></br> ${data[i].Poverty_Wage}</h2> 
                    </div>
                )
            }                      
        }  
    }
}

export default InfoContainer