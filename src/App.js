import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>

        </div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='*' element={<h1> NOT FOUND 404</h1>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
