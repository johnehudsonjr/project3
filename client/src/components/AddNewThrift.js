import React, { Component } from 'react';
import axios from 'axios'

class AddNewThrift extends Component {
    
    state ={
        thrift:[{}]
    }

    
    handleChange = event => {
        const newState = { ...this.state.thrift };
        newState[event.target.name] = event.target.value;
        this.setState({ thrift: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newThrift = this.state.thrift;

        axios.post("/api/thrift", newThrift).then(res => {
          this.props.getAllThrifts();
          
        });
      };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input
                class="input"
                type="text"
                placeholder="Store Name"
                name="store"
                value={this.state.thrift.store}
                onChange={this.handleChange}
          />
                <input
                class="input"
                type="text"
                placeholder="Description"
                name="description"
                value={this.state.thrift.description}
                onChange={this.handleChange}
          />
                <input
                class="input"
                type="text"
                placeholder="Location"
                name="location"
                value={this.state.thrift.location}
                onChange={this.handleChange}
          />
               
          <button>Submit</button>
          </form>
            </div>
        );
    }
}

export default AddNewThrift;