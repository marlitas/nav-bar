import NavBar from './components/nav-bar/navBar'
import { BrowserRouter  as  Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import ClickCounter from './components/ClickCounter/ClickCounter';
import Modal from './components/modal/Modal'
import './App.css'

function App() {
  const[show, setShow] = useState(false)

  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
            <div className='container'>
              <NavBar title='My Cool Site'/>
              <div className='element'><ClickCounter text='Click Counts' /></div>
              <div className='element'><button onClick={() => setShow(true)}>Open Modal</button></div>
              <Modal show={show} setter={setShow} />
            </div>
          }>
        </Route>
        <Route 
          path='/about'
          element={
            <NavBar title='My Cool Site'/>
          }>
        </Route>
      </Routes> 
    </Router>
  );
}

export default App;
