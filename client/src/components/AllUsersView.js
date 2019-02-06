import React, { Component } from 'react';
import axios from 'axios'
import CreateNewUserForm from './CreateNewUserForm'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'

class AllUsersView extends Component {

    state = {
        users: [{}],
        addUserFormVisible: false
    }

    componentDidMount(){
        this.getAllUsers()
    }

    getAllUsers = () =>{
        axios.get(`/api/users`)
        .then((res) => this.setState({users: res.data}))
    }

    toggleAddUserForm = () => {
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible })
    }


    render() {
        return (
            <div>
                <h1>Create Your User Profile</h1>

                <button onClick={this.toggleAddUserForm}>Create new user</button>

                {this.state.addUserFormVisible ? <CreateNewUserForm
                    getAllUsers={this.getAllUsers}
                    toggleAddUserForm={this.toggleAddUserForm}
                    /> : null}

                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/users/${user._id}`}><h3>{user.username}</h3></Link>
                    </div>
                ))}
            </div>
          

        );
    }
}


export default AllUsersView;