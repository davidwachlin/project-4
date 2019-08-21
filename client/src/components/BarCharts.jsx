import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class BarCharts extends Component {
    state = {
        barCharts: [],

    }

    componentDidMount() {
        this.getAllBarCharts()
    }

    getAllBarCharts = () => {
        axios.get('/api/barCharts').then(res => {
            console.log(res)
            this.setState({ barCharts: res.data })
        })
    }

    render() {
        console.log('render!')
        let barChartsList = this.state.barCharts.map(barchart => {
            return (
                <div key={barchart._id}>
                    <Link to={`/barcharts/${barchart._id}`}>{barchart.name}</Link>
                </div>
            )
        })
        return (
            <div>
                <h1>All BarCharts</h1>
                <div>{barChartsList}</div>
                <Link to='/barcharts/new'>New BarChart</Link>

            </div>
        )
    }
}
