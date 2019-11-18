import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Background from '../images/thirftShop.jpg'

const HeroImage = styled.div`
    border: 1px solid #000;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    
`;

class Homepage extends Component {
    render() {
        return (
            <div >

            
               <HeroImage>
                <div >
                  <div class="container">
                    <p class="title">
                    
                    <h1 class="logoFont">Personal Pickr</h1>
                    <p style={{fontSize: "12pt"}}>Search and share your favorite thrift stores and items!</p>
                    <div style={{marginTop: "20px"}}> 


                      <Link to="/thrift">
                                  <button class="button" style={{marginRight: "15pt"}}>Find Stores</button>
                      </Link>
                      <Link to="/finds">
                                  <button class="button">Find Items</button>
                      </Link>

                      </div>

                    </p>
                  </div>
                </div>

                </HeroImage>
             
            </div>
        );
    }
}


export default Homepage;