import React, { Component } from 'react';

import './SearchBar.css'



export default class SearchBar extends Component {


    render = () => {
        return (
            <div>
                {/* <input type="text" name="search" onChange={(e) => this.props.updateSearchBar(e)} value={this.props.search}/>
                <div id="search-results">
                    {this.props.toggle ?
                    (
                        this.props.filteredList.map((c, i) => {
                            if(this.props.search){
                                return <li onClick={this.props.populateHandler.bind(this)} key={i} className='counties'>{c}</li>
                            }
                        })
                    ) :
                    (
                        <div></div>
                    )
                    }
                </div> */}
                <select name={'county'} onChange={(e) => this.props.updateSearchBar(e)}>
                    {
                        this.props.filteredList.map((c, i) => <option key={i}>{c}</option>)
                    }
                </select>
            </div>
        )
    }
}