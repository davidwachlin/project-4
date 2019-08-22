import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

export default class SingleTrack extends Component {
    state = {
        track: {},
        redirectToBarChart: false
    }
    componentDidMount() {
        this.getTrack()
    }
    getTrack = () => {
        axios.get(`/api/barcharts/${this.props.match.params.barChartId}/tracks/${this.props.match.params.trackId}`)
        .then(res => {
            this.setState({ track: res.data })
            console.log('from singletrack', res.data)
        })
    }

    deleteTrack = () => {
        axios.delete(`/api/barCharts/${this.props.barChartId}/tracks/${this.props.match.params.trackId}`)
        .then((res) => {
            this.setState({ redirectToBarChart: true })
        })
    }

    render() {
        if (this.state.redirectToBarChart) {
			return <Redirect to={`/barcharts/${this.props.match.params.barChartId}`} />;
		}
        return (
            <div>
               <p> {this.state.track.name}</p>
               <button onClick={this.deleteTrack}>Delete</button>
               <div>

               <Link to={`/barcharts/${this.props.match.params.barChartId}/tracks`}>Back</Link>
               </div>
            </div>
        )
    }
}
