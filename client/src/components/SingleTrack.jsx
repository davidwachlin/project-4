import React, { Component } from 'react'
import axios from 'axios';

export default class SingleTrack extends Component {
    state = {
        track: {}
    }
    componentDidMount() {
        this.getTrack()
    }
    getTrack = () => {
        axios.get(`/api/barcharts/${this.props.match.params.barChartId}/tracks/${this.props.match.params.trackId}`)
        .then(res => {
            this.setState({ track: res.data })
            console.log(res.data)
        })
    }

    deleteTrack = () => {
        axios.delete(`/api/barCharts/${this.props.barChartId}/tracks`, this.props.track._id)
        .then((res) => console.log(res))
    }
    
    render() {
        return (
            <div>
               <p> {this.state.track.name}</p>
            </div>
        )
    }
}
