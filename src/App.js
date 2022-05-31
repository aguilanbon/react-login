import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Home from './pages/Home';

function App() {

  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn === false ? <Form  setIsloggedIn={setIsloggedIn} setCurrentUser={setCurrentUser}/> : ''}
        {isLoggedIn === true ? <Home currentUser={currentUser} /> : ''}
      </BrowserRouter>
    </div>
  );
}

export default App;
