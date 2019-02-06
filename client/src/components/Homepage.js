import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Thrift Find Search and Share Portal</h1>
                <h4>The place for you to search for and share your favorite thrift stores and items!</h4>
                <Link to="/thrift">
                    <button>Search and Share</button>
                </Link>
                <Link to="/finds">
                    <button>Search and Share Items</button>
                </Link>
            </div>
        );
    }
}

export default Homepage;