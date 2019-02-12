import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class LineGraph extends Component {
    render(){
        return (
            <LineChart width={600} height={300} data={this.props.socrataData}>
                <XAxis dataKey='taxable_year'/>
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray='5 5'/>
                <Tooltip/>
                <Line type='monotone' dataKey='median_income' stroke='#ff0000'/>
            </LineChart>
        )
    }
}
