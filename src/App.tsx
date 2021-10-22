import React from 'react';
import './assets/styles/main.scss'
import LibraryApp from "./component/LibraryApp";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AboutUs from "./component/RoutingComponents/AboutUs";
import Users from "./component/RoutingComponents/Users";

function App() {
    return (
        <Router>
            <div>
                <nav className='col-lg-4 col-md-6 col-8 nav-bar m-lg-4 m-md-4 m-2 p-1 p-lg-0 p-md-0'>
                    <ul className='d-flex align-items-center flex-row justify-content-evenly no-item-list'>
                        <li>
                            <Link to="/" className='link-dark text-decoration-none'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='link-dark text-decoration-none'>About</Link>
                        </li>
                        <li>
                            <Link to='/users' className='link-dark text-decoration-none'>Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/about'>
                        <AboutUs/>
                    </Route>
                    <Route path='/users'>
                        <Users/>
                    </Route>
                    <Route path='/'>
                        <LibraryApp/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
