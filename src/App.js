import {BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Competitions from "./components/Competitions/Competitions.jsx";
import Team from "./components/Team/Team.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

function App(){
  return <Router>
         <Route exact path = "/" component ={Home} />
         <Route exact path = "/Blogs" component ={Blogs} />
         <Route exact path = "/Competitions" component ={Competitions} />
         <Route exact path = "/Team" component ={Team} />
         <Route exact path = "/ContactUs" component ={ContactUs} />
        </Router>
}
export default App;
