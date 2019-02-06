import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Thrift Wish List</h1>
                <h4>Click the button below to start creating your wish list.</h4>
                <Link to="/users">
                    <button>NEW USER</button>
                </Link>
            </div>
        );
    }
}

export default Homepage;