import React, { Component } from 'react';
import GraphButton from '../Button/Button';
import TopoMap from '../TopoMap/TopoMap'



class MainContainer extends Component {

    onClick = (e) => {

    }

    componentDidMount() {
        this.getCounties()
    }

    getCounties = async () => {
        try {
            const response = await fetch (`/api/socrata/Alameda`)
            console.log(response, 'hit')

            if(!response.ok) {
                throw Error(response.statusText)
            }
            const countiesParsed =  await response.json()
            console.log(countiesParsed)

            this.setState({
                counties: countiesParsed.data
            })


        } catch (err) {
            console.log(err)
            return err
        }
    }

    render() {
        return (
            <div>
                <div className="m-container">

                    <p>this is the main container</p>
                    <GraphButton />
                    <TopoMap history={this.props.history}/>
                </div>
            </div>
        )
    }
}

export default MainContainer