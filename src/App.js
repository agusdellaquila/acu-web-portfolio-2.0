import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Gaming from './Components/Gaming/Gaming'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='theme-container vh' data-theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <div className='checkbox m-12'>
          <input id="toggle" type="checkbox" onClick={switchTheme}/>
          <label htmlFor ="toggle" className='switch'/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/games' element={<Gaming/>}></Route>
          <Route path='*' element={<NotFound/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
