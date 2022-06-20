import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Home from './pages/Home';
import {Toaster} from 'react-hot-toast'

function App() {

  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  return (
    <div className="App">
      <Toaster/>
      <BrowserRouter>
        {isLoggedIn === false ? <Form  setIsloggedIn={setIsloggedIn} setCurrentUser={setCurrentUser} userEmail={userEmail} setUserEmail={setUserEmail} userPassword={userPassword} setUserPassword={setUserPassword} /> : ''}
        {isLoggedIn === true ? <Home currentUser={currentUser} setUserEmail={setUserEmail} setUserPassword={setUserPassword} setIsloggedIn={setIsloggedIn}/> : ''}
      </BrowserRouter>
    </div>
  );
}

export default App;
