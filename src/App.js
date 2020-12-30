import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Blogs from './components/blogs/Blogs'
import SpacingGrid from './components/blogs/Grid'
import Cards from './components/blogs/Cards'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Header} />
        <Route exact path='/blogs' component={Blogs} />
      </Switch>
    </div>
  );
}

export default App;
