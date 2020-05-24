import React from 'react';
import './App.css';

import SearchIcon from './search.png';

import Carousel from './components/Carousel.jsx';

function App() {
  return (
    <div className="App">
      <header>
          <nav>
            <h1>Shop</h1>
            <a href="">Categories</a>
            <form method="get">
              <input name="search" id="search" type="text" placeholder="Search"></input>
              <button type="submit"><img src={SearchIcon} /></button>
            </form>
          </nav>
          <a href="" id="signin">Sign in</a>
      </header>
      <main>
        {/* Welcome to our online shop. We have cool things. */}
        <Carousel />
      </main>
    </div>
  );
}

export default App;
