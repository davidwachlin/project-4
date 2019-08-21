import React, { Component } from 'react'
import './Trackcard.css'

export default class Trackcard extends Component {
    render() {
        const imgUrl = this.props.track.album.images[1].url
        return (
            <div className='Trackcard'>
                <img src={imgUrl} alt='cover' />
                <p>{this.props.track.name}</p>
                <p>{this.props.track.artists[0].name}</p>
                <button onClick={this.props.addTrackToBarChart}>Add</button>
            
                

                
            </div>
        )
    }
}
 