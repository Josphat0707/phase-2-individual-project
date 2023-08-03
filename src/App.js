import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FeaturedCocktailpage from './pages/FeaturedCocktailpage';
import CocktailListPage from './pages/CocktailListPage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';


function App() {

  return (
    <Router>
      <div className="styling">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/featured" element={<FeaturedCocktailpage/>}/>
          <Route path="/search" element={<SearchBar/>}/>
          <Route exact path="/cocktails" element={<CocktailListPage/>}/>
          <Route path="/cocktails/:id" element={<CocktailDetailPage/>}/>
        </Routes>
       </div> 
    </Router>
  );
};

export default App;
