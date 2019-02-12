import React, { Component } from 'react';
import LineGraph from './LineGraph'

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class GraphContainer extends Component {
    state = {
        socrataData: [],
        // zillowData: []
    }
    componentDidMount = () => {
        this.getSocrataData()
        // this.getZillowData()
    }
    getSocrataData = async () => {
        try {
            const response = await fetch(`/api/socrata/${this.props.match.params.id}`)
            if(!response.ok){
                throw Error(response.statusText)
            }
            const parsedResponse = await response.json()
            const sortedData = parsedResponse.sort((a, b) => a.taxable_year - b.taxable_year)
            this.setState({
                socrataData: sortedData
            })
        } catch(err) {
            console.log(err)
            return err
        }
    }
    // getZillowData = async () => {
    //     try {
    //         const response = await fetch('/api/zillow/all')
    //         if(!response.ok){
    //             throw Error(response.statusText)
    //         }
    //         const parsedResponse = await response.json()
    //         const filteredData = parsedResponse.filter(county => county.name === `${this.props.match.params.id} County`);

    //         this.setState({
    //             zillowData: filteredData
    //         })

    //     } catch(err) {
    //         console.log(err)
    //         return err;
    //     }
    // } 
    render = () => {
        return (
            <div>
                <div className="g-container">
                    <h1>{this.props.match.params.id}</h1>
                    <LineGraph socrataData={this.state.socrataData} />
                </div>
            </div>
        )
    }
}

export default GraphContainer