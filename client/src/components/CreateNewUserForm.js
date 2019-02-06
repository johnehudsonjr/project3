import React, { Component } from 'react';
import axios from 'axios'

class CreateNewUserForm extends Component {
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
        axios.post('/api/users', payload)
        .then((res) => {
            this.props.getAllUsers()
            this.props.toggleAddUserForm()
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
                        name="bio"
                        value={this.state.user.bio}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Create My User Profile!</button>
                </form>
            </div>
        );
    }
}

export default CreateNewUserForm;