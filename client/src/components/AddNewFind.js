import React, { Component } from 'react';
import axios from "axios"

class AddNewFind extends Component {

    state ={
        find:[{}]
    }

    handleChange = event => {
        const newState = { ...this.state.find };
        newState[event.target.name] = event.target.value;
        this.setState({ find: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newFind = this.state.find;
        axios.post("/api/find", newFind).then(res => {
          this.props.getAllFinds();
        })
        .then(res => {
          window.location.href = '/lookingforlist';
        })
      };
    
    render() {
        return (
            <div class="container" style={{width: "400px"}}>
                <form onSubmit={this.handleSubmit}>
                <input
                class="input inputForm"
                type="text"
                placeholder="name"
                name="username"
                value={this.state.find.username}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="budget"
                name="budget"
                value={this.state.find.budget}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="description"
                name="description"
                value={this.state.find.description}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="image"
                name="image"
                value={this.state.find.image}
                onChange={this.handleChange}
          />
          <button class="button is-warning">Submit</button>
          </form>
            </div>
        );
    }
}

export default AddNewFind;