import React, { Component } from 'react'
import axios from 'axios'


export default class SingleUser extends Component {
    
    state = {
        user: {}
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
            </div>
        )
    }
}
