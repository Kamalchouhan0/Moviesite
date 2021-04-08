import React from "react";
import './Footer.css';
import Twitter from "../../Pics/twitter.png";
import Facebook from "../../Pics/facebook.png";
import Instagram from "../../Pics/instagram.png";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <div className="Footer_Main">
      <div className="Footer">
      <div className="Footer_title">Imagix <br/> <span style={{fontSize:"25px" }}>Cinema</span> </div>
            <div></div>
           <Link to="/"> <div className="Item1" >Home</div> </Link>
            <Link to="/Subscribe"><div className="Item2">Subscribe</div></Link>
            <Link to="/Movies"><div className="Item3">Movies</div></Link>
            <div className="Item4">News</div>
          

            <div className="Icon">
              <div><img src={Facebook} height="70%" width="70%"></img></div>
              <div><img src={Twitter} height="70%" width="70%"></img></div>
              <div><img src={Instagram} height="70%" width="70%"></img></div>
            </div>


      </div>
      
       </div>


    )
}

export default Footer;