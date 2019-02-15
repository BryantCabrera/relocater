import React, { Component } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './GraphContainer.css';


export default class LineGraph extends Component {
    render() {
        return (
            <div className="line-graph">
                <ResponsiveContainer maxWidth={600} maxHeight={200} minHeight={100}>
                    <LineChart width={725} height={300} data={this.props.socrataData}>
                        <XAxis dataKey='taxable_year' />
                        <CartesianGrid stroke="#ccc" strokeDasharray='5 5' />
                        <Tooltip />
                        <Line type='monotone' dataKey='median_income' stroke='#0000ff' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}






