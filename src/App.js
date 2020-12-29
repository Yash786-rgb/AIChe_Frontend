import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Blogs from './components/blogs/Blogs'
import SpacingGrid from './components/blogs/Grid'
import Cards from './components/blogs/Cards'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <br></br>
      <Router>
        <Navbar />
        <Header />
        {/* <Navbar /> */}
        {/* <Blogs /> */}
        {/* <Cards /> */}
        <Blogs />
        <SpacingGrid />
      </Router>
    </div>
  );
}

export default App;
