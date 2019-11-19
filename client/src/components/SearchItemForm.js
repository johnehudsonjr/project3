import React, { Component } from 'react'
import AddNewFind from './AddNewFind'

export class SearchItemForm extends Component {




    render() {
        return (
            <div>
            <h1>What Item Are You Looking For?</h1>

            <AddNewFind getAllFinds={this.getAllFinds} />
                
            </div>
        )
    }
}

export default SearchItemForm
