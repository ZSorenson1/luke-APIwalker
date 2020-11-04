import logo from './logo.svg';
import './App.css';
import { Router, navigate } from '@reach/router'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  return (
    <div className="App">
      <Form />
      <Router>
        <Display path="/:cat/:id"/>
      </Router>
    </div>
  );
}

export default App;
