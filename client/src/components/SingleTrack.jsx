import React, { Component } from 'react'
import axios from 'axios'
import AudioFeature from './AudioFeature'

export default class SingleTrack extends Component {
    state = {
        track: {}
    }
    
    componentDidMount() {
        this.getTrack()
    }
    getTrack = () => {
        axios
        .get(`/api/users/${this.props.match.params.userId}/tracks/${this.props.match.params.trackId}`)
        .then(res => {
            this.setState({ track: res.data })
        })
    }



    getAudioFeature = () => {
        
    }


    render() {
        return (
            <div>
                <h1>{this.state.track.name}</h1>
                <p>{this.state.track.popularity}</p>
                <p>{this.state.track.id}</p>
                <AudioFeature userId={this.props.match.params.userId} trackId={this.props.match.params.trackId} id={this.state.track.id}/>
            </div>
        )
    }
}
