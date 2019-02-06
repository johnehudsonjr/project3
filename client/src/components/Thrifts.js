import React, { Component } from 'react';
import axios from 'axios'
import AddNewThrift from './AddNewThrift';


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
                <h1>Enter the name of the items you are looking for!</h1>
                <AddNewThrift getAllThrifts={this.getAllThrifts}/>
                {this.state.thrift.map((thrifts, i) =>
                <div key={i}>
             
             <h1>{thrifts.store}</h1>
             <h1>{thrifts.description}</h1>
             <h1>{thrifts.location}</h1>
                    <button onClick={()=> this.delete(thrifts._id)}>Delete</button>

                    </div>

                    )}
                
            </div>

        );
    }
}

export default Thrifts;