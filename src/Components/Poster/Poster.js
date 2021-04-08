import React from "react";
import './Poster.css';
import Venom from "../../Pics/venomm.jpg";
import Button from "../../Reusecomp/Button/Button";
import Play from "../../Pics/play.png";
import Twitter from "../../Pics/twitter.png";
import Facebook from "../../Pics/facebook.png";
import Instagram from "../../Pics/instagram.png";
import Search from "../../Pics/search.png"
import {Link} from "react-router-dom";

function Poster() {
  return (
    <div className="Poster_Main">
      <div className="Header" >
            <div className="Poster_title">Imagix <br/> <span style={{fontSize:"25px" }}>Cinema</span> </div>
            <div></div>
            <Link to="/"><div className="Item1"  >Home</div></Link>
            <Link to="/Subscribe" ><div className="Item2">Subscribe</div></Link>
            <Link to="/Movie"> <div className="Item3">Movies</div></Link>
            
            <div className="Item4">News</div> 
            <div className="Item5"><img src={Search} height="30%" width="30%"></img></div> 
            <div className="Item6" style={{height:"30%"}}><Button title="Sign Up"/></div> 


      </div>
      <div style={{height:"100%",width:"100%" }}></div>


      <div className="Stream">
          <div className="Stream_btn" style={{height:"30%",width:"70%"}}><Button title="Sign Up"/></div>
          <div className="Stream_date" style={{textAlign:"left"}}> <p>January 31 2021</p> <p> 3D Max </p> </div>
          <div></div>
          <div className="Stream_play"> <img src={Play} height="60%" width="60%" ></img> <br/> Play and Watch </div>
      </div>


      <div className="Socialiconposter">
          <div className="Social_icon"> 
          <div className="Icons">
          <div><img src={Facebook} height="40%" width="40%"></img></div>
              <div><img src={Twitter} height="40%" width="40%"></img></div>
              <div><img src={Instagram} height="40%" width="40%"></img></div>
          </div>
          <div></div>
            
          </div>
      </div>
      </div>
    )
}

export default Poster;