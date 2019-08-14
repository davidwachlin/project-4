import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Users extends Component {
    
    state = {
        users: []
    }

    componentDidMount(){
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then((res) => {
                this.setState({ users: res.data })
            })
        }


    render() {
        let usersList = this.state.users.map(user => {
            return (
                <li key={user._id}>
                <Link to={`/${user._id}`}>{user.name}</Link>
                </li>
            )
        })
        return (
            <div>
                <ul>
                    {usersList}
                </ul>
            </div>
        )
    }

}