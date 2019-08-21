import React, { Component } from 'react'
import './Trackcard.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Trackcard extends Component {

    
    addTrackToBarChart = () => {
        axios.post(`/api/barCharts/${this.props.barChartId}/tracks`, this.props.track)
        .then((res) => console.log(res))
    }

    deleteTrack = () => {
        axios.delete(`/api/barCharts/${this.props.barChartId}/tracks`, this.props.track)
        .then((res) => console.log(res))
    }

    render() {
        const imgUrl = this.props.track.album.images[1].url
        return (
            <div className='Trackcard'>
                <img src={imgUrl} alt='cover' />
                <p>{this.props.track.name}</p>
                <p>{this.props.track.artists[0].name}</p>
                <button onClick={this.addTrackToBarChart}>Add</button>
            
                

                
            </div>
        )
    }
}
 