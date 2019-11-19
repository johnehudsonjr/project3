import React, { Component } from 'react';
import axios from 'axios'
import AddNewFind from './AddNewFind';
import Navbar from './Navbar';

class LookingFor extends Component {
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
// Delete find by id connects to routes/index.js
    // delete = findId => {
    //     axios.delete(`/api/find/${findId}`).then(() => {
    //         this.setState({
    //             find: this.state.find.filter(item => item._id !== findId)
    //         });
    //     });
    // };

    // update = findId => {
    //     axios.patch(`/api/find/${findId}`).then(() => {
    //         console.log('edited')
    //     });
    // };




    render() {
        return (

            <div>
                <Navbar />
    
                      <h1>What Item Are You Looking For?</h1>

                        <AddNewFind getAllFinds={this.getAllFinds} />

                    </div>


                );
                }
            }
            
export default LookingFor; 