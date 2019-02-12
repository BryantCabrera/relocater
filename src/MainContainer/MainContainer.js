import React, { Component } from 'react';
import TopoMap from '../TopoMap/TopoMap'



class MainContainer extends Component {


    render() {
        return (
            <div>
                <div className="m-container">
                    <TopoMap history={this.props.history}/>
                </div>
            </div>
        )
    }
}

export default MainContainer