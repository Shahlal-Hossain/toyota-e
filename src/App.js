import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nevigation from './Component/Nevigation/Nevigation';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';



const App =()=> {
  return (
    <BrowserRouter >
      <Nevigation/>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/My-account' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
