import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    </div>
  );
}

export default App;
