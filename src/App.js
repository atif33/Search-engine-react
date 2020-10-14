import React from 'react';
import './App.css';
import Navbar from "./components/shared/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Users} from "./components/users/Users";
import {UserItem} from "./components/users/UserItem";

function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="container mt-2">
                    <Switch>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/user/:login" component={UserItem} />
                        <Route exacr component={Users}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
