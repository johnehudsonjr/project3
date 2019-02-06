import React, { Component } from 'react';
import axios from 'axios'

class UpdateNewUserForm extends Component {
    state = {
        user: {
            username:'',
            bio:''
        }
    }

    handleChange = (event) => {
        const newState = {...this.state.user}
        newState[event.target.name] = event.target.value
        this.setState({user: newState})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.user
        const userId = this.state.userId
        console.log(userId)
        axios.patch(`/api/users/${userId}`, payload)
        .then((res) => {
            this.props.getSingleUser()
            this.props.toggleEditUserForm()
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="What is your style"
                        value={this.state.user.bio}
                        onChange={this.handleChange}
                        name="bio"/>
                    </div>
                    <button>Update User Profile</button>
                </form>
            </div>
        );
    }
}

export default UpdateNewUserForm;