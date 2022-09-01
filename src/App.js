import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Gaming from './Components/Gaming/Gaming'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';

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
          <Route path='/games-favourites' element={<Gaming/>}></Route>
          <Route path='/games-achievements' element={<Gaming/>}></Route>
          <Route path='/games-completed' element={<Gaming/>}></Route>
          <Route path='*' element={<NotFound/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
