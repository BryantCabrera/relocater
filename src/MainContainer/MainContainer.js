import React, { Component } from 'react';
import GraphButton from '../Button/Button';
import TopoMap from '../TopoMap/TopoMap'



class MainContainer extends Component {
    onClick = (e) => {

    }

    render (){
        return(
            <div>
                <div className="m-container">

                <p>this is the main container</p>
                    <GraphButton/>
                    <TopoMap />
                </div>
            </div>
        )
    }
}

export default MainContainer