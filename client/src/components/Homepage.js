import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <section class="hero is-link is-fullheight ">
  <div class="hero-body">
    <div class="container">
      <p class="title">
      <p>Welcome To</p>
      <h1 class="logoFont">Thrift Find!</h1>
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
</section>
                
             
            </div>
        );
    }
}

export default Homepage;