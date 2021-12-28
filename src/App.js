import NavBar from './components/nav-bar/navBar'
import { BrowserRouter  as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
            <NavBar title='My Cool Site'/>
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
