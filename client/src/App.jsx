import React from 'react';
import './App.css';

import {BrowserRouter,Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Axios from 'axios';

import SearchIcon from './search.png';

import Carousel from './components/Carousel.jsx';
import Items from './components/Items.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
          <nav>
            <h1><Link to="/">Shop</Link></h1>
            <Link to="/categories">Categories</Link>
            <form method="get">
              <input name="search" id="search" type="text" placeholder="Search"></input>
              <button type="submit"><img src={SearchIcon} /></button>
            </form>
          </nav>
          <a href="" id="signin">Sign in</a>
      </header>
      <main>
        {/* Welcome to our online shop. We have cool things. */}
        <Route exact path="/" render={()=><Carousel />} />
        <Route path="/categories" render={()=><Items />} />
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
