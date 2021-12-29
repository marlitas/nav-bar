import './navBar.css'
import {NavLink} from 'react-router-dom'
import NavDropdown from '../navDropdown/navDropdown'

function navBar({ title }) {
  return (
    <div className="nav-bar">
      <h1 className="site-title">{title}</h1>
      <div className="menu">
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        <NavLink activeClassName='active' to='/about'>About</NavLink>
        <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
        <NavDropdown heading='Media'/>
      </div>
    </div>
  )
}

export default navBar
