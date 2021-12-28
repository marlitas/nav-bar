import './navBar.css'
import {NavLink} from 'react-router-dom'

function navBar({ title }) {
  return (
    <div className="nav-bar">
      <h1 className="site-title">{title}</h1>
      <div className="menu">
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        <NavLink activeClassName='active' to='/about'>About</NavLink>
        <NavLink activeClassName='active' to='/media'>Media</NavLink>
        <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
      </div>
    </div>
  )
}

export default navBar
