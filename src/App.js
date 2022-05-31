import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Home from './pages/Home';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        {loggedInUser === false ? <Form  setLoggedInUser={setLoggedInUser}/> : ''}
        {loggedInUser === true ? <Home /> : ''}
      </BrowserRouter>
    </div>
  );
}

export default App;
