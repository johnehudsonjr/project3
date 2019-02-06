import React, { Component } from 'react';
import axios from 'axios'
import AddNewThrift from './AddNewThrift';
import Navbar from './Navbar';


class Thrifts extends Component {
    state ={
        thrift:[{}]
    }

    componentDidMount(){
        this.getAllThrifts()
    }

    getAllThrifts = () => {
    axios.get('/api/thrift').then(res =>{
        this.setState({thrift:res.data})
    })    
    }
    delete = thriftId => {
        axios.delete(`/api/thrift/${thriftId}`).then(() => {
          this.setState({
            thrift: this.state.thrift.filter(item => item._id !== thriftId)
          });
        });
      };

      
    render() {
        return (
        
            <div>
              <Navbar />

                {this.state.thrift.map((thrifts, i) =>
                <div class="container" key={i}>


            <div class="card container" style={{width: "400px", marginBottom: "50px", marginTop: "20px"}}>
            <div class="card-content">
                <p class="title">
                {thrifts.store}
                </p>
                <p class="subtitle">
                {thrifts.description} <br /> {thrifts.location}
                </p>
                <button class="button is-warning" onClick={()=> this.delete(thrifts._id)}>Delete</button>

            </div>
            </div>

                    </div>

                    )}
                    <div class="container" style={{width: "400px"}}>
                      <h1 class="headerFont">Share your fav Thrift Store!</h1>
                <AddNewThrift getAllThrifts={this.getAllThrifts}/>
                    </div>
                
            </div>

        );
    }
}

export default Thrifts;