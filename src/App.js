import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
    <Route exact  path='/' element={<NewsComponent key="general" category="general" />} />
    <Route exact  path='/science' element={<NewsComponent key="science" category="science" />} />
    <Route exact  path='/sports' element={<NewsComponent key="sports" category="sport"/>} />
    <Route exact  path='/business' element={<NewsComponent key="business" category="business"/>} />
    <Route exact  path='/technology' element={<NewsComponent key="technology" category="technology"/>} />
    </Routes>
   </Router>
  
  
    

    
          
  )
}

export default App;
