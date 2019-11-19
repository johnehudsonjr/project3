import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Background from '../images/thriftedCoats.jpg'


const HeroImage = styled.div`
    border: 1px solid #000;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    
`;
const HeroContent = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    
`;

class Homepage extends Component {
    render() {
        return (
            <div >

            
               <HeroImage>
                <HeroContent>
                  <div class="container">
                    <p class="title">
                    
                    <h1 style={{contentAlign: "center", color:"white"}}class="logoFont">Personal Pickr</h1>
                    <p style={{color: "white", fontSize: "12pt"}}>Find your thrift items. </p>
                    <div style={{marginTop: "20px"}}> 

                      <Link to="/lookingforlist">
                                <button class="button">Help Them Find It</button>
                      </Link>
                      <Link to="/thrift">
                                  <button class="button" style={{marginLeft: "25pt"}}>Store</button>
                      </Link>
                    

                      </div>

                    </p>
                  </div>
                </HeroContent>

                </HeroImage>
           
            </div>
        );
    }
}


export default Homepage;