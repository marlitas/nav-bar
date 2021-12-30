import { createPortal } from 'react-dom';
import ReactDom from 'react-dom';
import React from 'react';
import './Modal.css';

//Place on modal main page.
// const[show, setShow] = useState(false)
// Trigger to open modal should live on main page.
// <button onClick={() => setShow(!show)}>Open Modal</button>

const Modal = ({show, setter}) => {


  return ReactDom.createPortal(
    <>
      {show && (
        <div className='wrapper' onClick={() => setter(!show)}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <h1>Modal Content Here</h1>
            <button onClick={() => setter(!show)}>Close Modal</button>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}

export default Modal
