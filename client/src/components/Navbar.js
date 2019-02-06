import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
            <h1 class="navbarFont" > Thrift & Find </h1>
    <button class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    <Link to='/' className= "navbar-item navLinks" >Home</Link>
    <Link to='/thrift' className= "navbar-item navLinks" >Thrift Stores</Link>
    <Link to='/finds' className= "navbar-item navLinks" >Thrift Items</Link>
    

    </div>

  </div>
</nav>
                
            </div>
        );
    }
}

export default Navbar;