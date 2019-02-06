import React, { Component } from 'react';
import axios from 'axios'
import AddNewFind from './AddNewFind';
import EditFind from './EditFind'

class Find extends Component {
    state ={
        find:[{}]
    }

    componentDidMount(){
        this.getAllFinds()
    }

    getAllFinds = () => {
    axios.get('/api/find').then(res =>{
        this.setState({find:res.data})
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
                <h1>Enter the name of the items you are looking for!</h1>
                <AddNewFind getAllFinds={this.getAllFinds}/>
                {this.state.find.map((thriftFinds, i) =>
                <div key={i}>
             
             <h1>{thriftFinds.username}</h1>
             <h1>{thriftFinds.budget}</h1>
             <h1>{thriftFinds.description}</h1>
            <img src= {thriftFinds.image} alt="finds" />
                    <button onClick={()=> this.delete(thriftFinds._id)}>Delete</button>
                    <EditFind getAllFinds={this.getAllFinds} findId={thriftFinds._id}/>
                    </div>

                    )}
                
            </div>

        );
    }
}

export default Find;