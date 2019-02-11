import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export default class LineGraph extends Component {
    render(){
        return (
            <LineChart width={600} height={300} data={this.props.data}>
                <XAxis dataKey='name'/>
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray='5 5'/>
                <Line type='monotone' dataKey='uv' stroke='#ff0000'/>
                <Line type='monotone' dataKey='pv' stroke='#00ff00'/>
            </LineChart>
        )
    }
}
