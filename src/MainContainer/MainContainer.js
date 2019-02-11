import React, { Component } from 'react';
import GraphButton from '../Button/Button';



class MainContainer extends Component {
    onClick = (e) => {

    }

    render (){
        return(
    <div>
        <div className="m-container">

        <p>this is the main container</p>
            <GraphButton/>
        </div>
    </div>
        )
    }
}

export default MainContainer