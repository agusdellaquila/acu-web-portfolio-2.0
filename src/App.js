import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Gaming from './Components/Gaming/Gaming'
import Movies from './Components/Movies/Movies';
import Gallery from './Components/Gallery/Gallery';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='theme-container h-screen overflow-auto' data-theme={theme}>
      <BrowserRouter>
        <Navbar switchTheme={switchTheme}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/games' element={<Gaming/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/AI-gallery' element={<Gallery/>}></Route>
          <Route path='*' element={<NotFound/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
