import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

export default class LineGraph extends Component {
    render(){
        return (
            <LineChart width={200} height={200} data={this.props.data}>
                <Line type='monotone' dataKey='pv' stroke='#8884d8'/>
            </LineChart>
        )
    }
}
