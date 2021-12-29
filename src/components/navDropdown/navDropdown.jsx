import './navDropdown.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({heading}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='dropdown' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div>{heading}</div>
      {open &&
        <div className='content'> 
          <ul>
            <Link to='/photos'>Photo</Link>
            <Link to='/videos'>Video</Link>
            <Link to='/press'>Press</Link>
          </ul>
        </div>
      }
    </div>
  )
}

export default NavDropdown
