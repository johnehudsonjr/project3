import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar';


export class LookingForList extends Component {

    state = {
        find: [{}]
    }

    componentDidMount() {
        this.getAllFinds()
    }
// gets all finds from database (MongoDB) using axios 
// connects to routes/index.js

    getAllFinds = () => {
        axios.get('/api/find').then(res => {
            this.setState({ find: res.data })
        })
    }
    delete = findId => {
        axios.delete(`/api/find/${findId}`).then(() => {
            this.setState({
                find: this.state.find.filter(item => item._id !== findId)
            });
        });
    };

    update = findId => {
        axios.patch(`/api/find/${findId}`).then(() => {
            console.log('edited')
        });
    };


    render() {
        return (
            <div>
            <Navbar/>
             This is where I want all of the things users are looking for to show up.
            
             {this.state.find.map((thriftFinds, i) =>
                <div class="container" style= {{width: "500px", marginTop: "50px"}} key={i}>

                    <div class="card container">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={thriftFinds.image} alt="Placeholder" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src={thriftFinds.image} alt="Placeholder 2" />
                                    </figure>
                                </div>


                                <div class="content">
                                    <h1>{thriftFinds.username}</h1>
                                    <h1>{thriftFinds.budget}</h1>
                                    {thriftFinds.description} <br /> 
                                    <button class="button is-warning" onClick={() => this.delete(thriftFinds._id)}>Delete</button>

                                </div>
                            </div>
                        </div>
                    </div>

                       
                    </div>

                    )}
            
            
            
             </div>
        )
    }
}

export default LookingForList
