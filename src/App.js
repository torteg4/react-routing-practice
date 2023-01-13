import React from "react";
import Params from './components/Params';
import {
  BrowserRouter,
  Routes,
  Route,
  Link 
} from "react-router-dom";
    

const Dashboard = (props) => {
  return (
    <div style={{padding: "10px", textAlign: "center"}}>
        <h1 style={{color: "purple"}}>Welcome</h1>
        <Link to={"/Home"}>Go to Home </Link>
        <p>To display word :  localhost:3000/insert-word-here</p>
        <p>To display number :  localhost:3000/insert-number-here</p>
        <p>To display fancy word :  localhost:3000/fancyWords/limegreen/purple</p>
    </div>
  );
}

const Home = (props) => {
  return (
    <div style = {{padding: "10px", textAlign: "center"}}>
        <h1 style={{color: "orange"}}>Welcome</h1>
        <Link to={"/"}>Go back </Link>
    </div>
  );
}

    
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/:word" element={<Params />} />
        <Route path="/:word/:color/:bgCol" element={<Params />}/>

      </Routes>
    </BrowserRouter>
  );
}
    
export default App