import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

//import logo from '../logo-designcode.svg'
//import logo from '../images/e-logo.jpg'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/e-logo.jpg')} width="30"/></Link>
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/getquote"><button>Get Quote</button></Link>
      
    </div>
  </div>
)

export default Header
