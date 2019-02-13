import React, { Component } from 'react';
import data from '../data/db.json'
import './SearchBar.css'

const nameData = data.map(d => d.County)

export default class SearchBar extends Component {
    state = {
        search: '',
        filteredList: [],
        toggle: false
    }

    updateSearchBar = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            filteredList: [...nameData].filter(c => c.includes(e.target.value) ),
            toggle: true
        })
    }

    populateHandler = (e) => {
        this.setState({
            search: e.target.textContent,
            toggle: false
        })
    }
    render = () => {
        return (
            <div>
                <input type="text" name="search" onChange={this.updateSearchBar} value={this.state.search}/>
                <div id="search-results">
                    {this.state.toggle ?
                    (
                        this.state.filteredList.map((c, i) => {
                            if(this.state.search){
                                return <li onClick={this.populateHandler.bind(this)} key={i} className='counties'>{c}</li>
                            }
                        })
                    ) :
                    (
                        <div></div>
                    )
                    }
                </div>
            </div>
        )
    }
}