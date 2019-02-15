import React, { Component } from 'react';
import data from '../data/db.json';

class InfoContainer extends Component {
    render = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].County == this.props.countyName ) {
                return (
                    <div className='data__info--container'>
                        <h4 className="info-container-items">Population <br></br>{data[i].Population}</h4>
                        <h4 className="info-container-items">Unemployment Rate <br></br>{data[i].Unemployment_Rate}%</h4>
                        <h4 className="info-container-items">Average House Cost<br></br> ${data[i].Avg_Home_Price}</h4>
                        <h4 className="info-container-items">Median Age<br></br> {data[i].Median_Age}</h4>
                        <h4 className="info-container-items">Living Wage<br></br> ${data[i].Living_Wage}</h4>
                        <h4 className="info-container-items">Poverty Wage<br></br> ${data[i].Poverty_Wage}</h4> 
                    </div>
                )
            }                      
        }  
    }
}

export default InfoContainer;