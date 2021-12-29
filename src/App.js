import NavBar from './components/nav-bar/navBar'
import { BrowserRouter  as  Router, Routes, Route } from 'react-router-dom';
import ClickCounter from './components/ClickCounter/ClickCounter';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
            <div className='container'>
              <NavBar title='My Cool Site'/>
              <ClickCounter text='Click Counts' />
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
