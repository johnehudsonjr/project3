import React, { Component } from 'react';
import axios from 'axios'

class EditFind extends Component {
    
        state = {
            find: {
                name: '',
                budget: '',
                description: '',
                image: ''
            }
        }
    
        handleChange = (event) => {
            const newState = { ...this.state.find }
            newState[event.target.name] = event.target.value
            this.setState({ find: newState })
        }
    
        handleSubmit = (event) => {
            event.preventDefault()
            const payload = this.state.find
            const findId = this.props.findId
            console.log(findId)
            axios.patch(`/api/find/${findId}`, payload)
            .then((res) => {
                this.props.getAllFinds()
            })
        }
    
    render() {
        return (
           
                <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="name"
                        name="username"
                        value={this.state.find.username}
                        onChange={this.handleChange}
                        />
                        <input type="text"
                        placeholder="budget"
                        name="budget"
                        value={this.state.find.budget}
                        onChange={this.handleChange}
                        />
                        <input type="text"
                        placeholder="description"
                        name="description"
                        value={this.state.find.description}
                        onChange={this.handleChange}
                        />
                        <input type="text"
                        placeholder="image"
                        name="image"
                        value={this.state.find.image}
                        onChange={this.handleChange}
                        />
                    </div>
                   
                    <button class="button is-warning">Edit Find</button>
                </form>
            </div>
           
        );
    }
}

export default EditFind;