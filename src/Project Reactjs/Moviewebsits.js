import React, { Component } from 'react'
import Header  from './Header';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import BottomNavibar from './BottomNavibar';
import Movie from './Movie';
import Trending from './Trending';
import TvSeries from './Tv series';
import Search from './Search';
import Readmore from './Readmore'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
export default class Moviewebsits extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar> 
            <Router>
          <BottomNavibar>        
        </BottomNavibar>
        <Routes>
          <Route path="/" element={<Trending/>}></Route>  
          <Route path="/more" element={<Readmore/>}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
          <Route path="/movie" element={<Movie/>}></Route>
          <Route path="/tvseries" element={<TvSeries/>}></Route>
          <Route path="/search" element={<Search/>}></Route> 
        </Routes>
        </Router>
      </div>
    )
  }
}
