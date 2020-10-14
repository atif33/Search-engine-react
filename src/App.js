import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Users} from "./components/users/Users";
import Navbar from "./components/shared/Navbar";

function App() {


    return (
        <div className="App">
            <Navbar />
            <div className="container mt-2">
                <Users/>
            </div>
        </div>
    );
}

export default App;
