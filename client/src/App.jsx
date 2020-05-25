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
        <Route exact path="/" render={()=><React.Fragment><Carousel /><Items /></React.Fragment>} />
        <Route path="/categories" render={()=><Items />} />
      </main>
      <footer>
        <p>&copy; Alexander Stradnic 2020</p>
        <ul>
          <li><a href="https://nimitzpro.github.io">My Portfolio</a></li>
          <li><a href="https://reactjs.org">ReactJS</a></li>
          <li><a href="https://nodejs.org/en/about/">NodeJS</a></li>
          <li><a href="https://www.mongodb.com/">MongoDB</a></li>
        </ul>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
