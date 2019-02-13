import React, { Component } from 'react';
import data from '../data/db.json'

class InfoContainer extends Component {
    render = () => {
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].County)
            if (data[i].County == this.props.countyName ) {
                // console.log(data[i].County);
                return (
                    <div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <h2>Population <br></br>{data[i].Population}</h2>
                        <h2>Unemployment Rate <br></br>{data[i].Unemployment_Rate}%</h2>
                        <h2>Average House Cost<br></br> ${data[i].Avg_Home_Price}</h2>
                        <h2>Median Age<br></br> {data[i].Median_Age}</h2>
                        <h2>Living Wage<br></br> ${data[i].Living_Wage}</h2>
                        <h2>Poverty Wage<br></br> ${data[i].Poverty_Wage}</h2> 
                    </div>
                )
            }                      
        }  
    }
}

export default InfoContainer