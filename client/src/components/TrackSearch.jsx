import React, { Component } from 'react'

export default class TrackSearch extends Component {
    state = {
        searchTracks: [],
        searchField: ''
    }
    
    handleSubmit = () => {

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search' />
                    <input type='text' id='search' />
                </form>
                
            </div>
        )
    }
}
