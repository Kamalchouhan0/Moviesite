import React, { useEffect, useState } from "react";
import './App.css';

import {Route,Switch,BrowserRouter} from "react-router-dom";


import Home from "./Components/Home/Home";
import Subscribe from "./Components/Subscribe/Subscribe";
import Movie from "./Components/Movie/Movie";
import Moviedetail from "./Reusecomp/Moviedetail/Moviedetail";



function App() {
 
  return (
    <BrowserRouter>
    <div className="App_Main">
      
         <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/Subscribe" component={Subscribe} exact/>
           <Route path="/Movie" component={Movie}exact />

           <Route path="/details" render={(props)=><Moviedetail {...props}/>} exact/>
         </Switch>
     

       </div>
       </BrowserRouter>

    )
}

export default App;
