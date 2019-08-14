import React, { Component } from 'react'
import axios from 'axios'

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
    render() {
        return (
            <div>
                <h1>{this.state.track.name}</h1>
                <p>from single track</p>
            </div>
        )
    }
}
