import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Thrift Wish List</h1>
                <Link to="/users">
                    <button>Log In</button>
                </Link>
            </div>
        );
    }
}

export default Homepage;