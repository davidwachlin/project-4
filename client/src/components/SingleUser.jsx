import React, { Component } from 'react'
import axios from 'axios'
import Tracks from './Tracks'
import { Track } from 'react-spotify-api'


export default class SingleUser extends Component {
    
    state = {
        user: {}
    }
    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        axios.get(`api/users/${this.props.match.params.userId}`)
            .then(res => {
                this.setState({ user: res.data})
            })
    }
    render() {
        return (
            <div>
                <h1>{this.state.user.name}</h1>
                <p>{this.state.user.email}</p>

            </div>
        )
    }
}
