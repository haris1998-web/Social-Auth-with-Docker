import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AuthPage from './pages/AuthPage';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='*' element={<LoginPage/>}/>
          <Route exact path='/login' element={<AuthPage/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;