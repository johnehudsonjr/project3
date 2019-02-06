import React, { Component } from 'react';
import axios from 'axios'
import UpdateNewUserForm from './UpdateNewUserForm';
import WishBox from './WishBox'
// import styled from 'styled-components'

class UserView extends Component {
    state = {
        user:{
            wishes:[{}]
            },
            editFormVisible: false
        }
    
    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
    }
    
    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditUserForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    createNewWish = () => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/wishes`).then((res) => {
            this.getSingleUser()
        })
    }

    render() {
        return (
            <div>
               <h1>{this.state.user.username}'s WishList!</h1>
                <p>User Bio: {this.state.user.bio}</p>
                <div><button onClick={this.toggleEditUserForm}>Edit User</button></div>
                <div>
                    <button onClick={this.createNewWish}>Add Wish</button>
                </div>
                {this.state.editFormVisible ? <UpdateNewUserForm
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUserForm={this.toggleEditUserForm}
                /> : null}
                <div><button onClick={this.deleteUser}>Delete User</button></div>
                    
                    {/* <WishBox user={this.state.user} wishes={this.state.user.wishes}
                    getSingleUser={this.getSingleUser} */}
                    <WishBox user={this.state.user}
                    getSingleUser={this.getSingleUser}
                    />
            </div>
        );
    }
}

export default UserView;