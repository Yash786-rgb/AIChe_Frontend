import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar sticky="top" />

      </Router>
    </div>
  );
}

export default App;
