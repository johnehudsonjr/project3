import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';


const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class WishBox extends Component {
    state = {
        wish: {
            title: '',
            description: ''
        }
    }

    handleChange = (event, wishId) => {
        console.log(wishId)
        this.props.user.wishes.forEach((wish) => {
            if(wishId === wish._id) {
                // this.setState({idea: idea})
                updatedState[event.target.name] = event.target.value
            }
        })
        const updatedState = { ...this.state.wish }
        this.setState({ wish: updatedState })
    }

    handleSubmit = (event, wishId) => {
        event.preventDefault()
        const payload = this.state.wish
        axios.patch(`/api/wishes/${wishId}`, payload)
        .then(() => this.props.getSingleUser)
    }

    deleteWish = (event, wishId) => {
        event.preventDefault()
        console.log(wishId)
        axios.delete(`/api/wishes/${wishId}`).then(() => {
            this.props.getSingleUser()
        })
    }
    render() {
        return (
             <FlexContainer>
                {this.props.user.wishes.map((wish, i) => (
                        <div onBlur={(event) => this.handleSubmit(event, wish._id)} key={i}>
                            <button onClick={(event)=> this.deleteWish(event, wish._id)}>x</button>
                            <div><input onChange={(event)=> this.handleChange(event, wish._id)} type="text" name="title" value={wish.title}></input></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, wish._id)} type="text" name="description" value={wish.description}></textarea></div>
                        </div>
                    ))}
        
            </FlexContainer>
        );
    }
}

export default WishBox;