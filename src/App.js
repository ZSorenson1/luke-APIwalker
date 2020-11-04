import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import Home from './components/Home'
import Display from './components/Display'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Display path="/:id"/>
        <Display path="/:id/:color"/>
        <Display path="/:id/:color/:bgcolor"/>
        
      </Router>
    </div>
  );
}

export default App;
