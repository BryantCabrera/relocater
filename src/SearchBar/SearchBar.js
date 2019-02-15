import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render = () => {
        return (
            <div>
                <select name={'county'} onChange={(e) => this.props.updateSearchBar(e)}>
                    {
                        this.props.filteredList.map((c, i) => <option key={i}>{c}</option>)
                    }
                </select>
            </div>
        )
    }
}