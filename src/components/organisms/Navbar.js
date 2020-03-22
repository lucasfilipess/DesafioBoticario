import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CartLogo from '../atoms/CartLogo';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          MINHA LOJA
        </a>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`${classOne}`} id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <a className='nav-item nav-link' href='#'>
              PERFUMARIA <span className='sr-only'>(current)</span>
            </a>
            <a className='nav-item nav-link' href='#'>
              MAQUIAGEM
            </a>
            <a className='nav-item nav-link' href='#'>
              CABELOS
            </a>
            <a className='nav-item nav-link' href='#'>
              INFANTIL
            </a>
          </div>
        </div>
        <CartLogo />
      </nav>
    );
  }
}
export default Navbar;
