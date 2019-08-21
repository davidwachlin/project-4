import React, { Component } from 'react'
import axios from 'axios';

export default class BarCharts extends Component {
    state = {
        barCharts: [],
        newBarChart: {
            tracks: [],
            graphFeature: ''
        },
        isNewFormDisplayed: false
    }

    componenetDidMount() {
        this.getAllBarCharts()
    }

    getAllBarCharts = () => {
        axios.get(`/api/barcharts`).then(res => {
            this.setState({ barCharts: res.data })
        })
    }
    render() {
        let barChartList = this.state.barCharts.map(barchart => {
            return (
                <Link to={`/${barchart._id}`}>{barchart.name}</Link>
            )
        })
        return (
            <div>
                
            </div>
        )
    }
}
