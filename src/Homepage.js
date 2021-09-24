import React from 'react';
import './Homepage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Board from './Board.js';

const Homepage = () => {
    return(
            <Navbar/>
        );
}

const Navbar = () => {
    return(
        <div class="nav_bar">
            <Router>
                    <nav class="container">
                    <ul class="nav_menu">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/users">Users</Link>
                        </li>
                    </ul>
                    </nav>
                    <Switch>
                    <Route path="/about">
                        {/* <About /> */}
                    </Route>
                    <Route path="/users">
                        {/* <Users /> */}
                    </Route>
                    <Route path="/">
                        <Board />
                    </Route>
                    </Switch>
                </Router>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

export default Homepage;