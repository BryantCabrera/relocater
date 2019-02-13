import React, { Component } from 'react';
import LineGraph from './LineGraph'
import InfoContainer from './InfoContainer'
import './GraphContainer.css'

class GraphContainer extends Component {
    state = {
        socrataData: [],
        user: {}
        // zillowData: []
    }
    componentDidMount = () => {
        this.getSocrataData();
        // this.getZillowData()
        this.setState({
            user: this.props.user
        })
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
        console.log(this.state, ' this is GraphContainers state');
        return (
            <div className="grid-container">
                <div className="g-container">
                    <h1>{this.props.match.params.id} Median Income</h1>
                    {
                        this.state.socrataData.length > 0 && <LineGraph socrataData={this.state.socrataData} />
                    }
                </div>
                <div className="info-container">
                    < InfoContainer countyName={this.props.match.params.id} />


                </div>
                <div className="compare-box">
                {/* placeholder icons for now ? we can change them - ummer */}
                <br></br><img id="compare-icon" src="../compare-icon.png"></img>
                </div>
            </div>
        )
    }
}

export default GraphContainer