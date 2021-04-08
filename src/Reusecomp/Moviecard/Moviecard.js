import React from "react";
import "./Moviecard.css";
import Panther from "../../Pics/panther.jpg";
import Button from "../Button/Button";
import{Link} from "react-router-dom";

function Moviecard(props){
    return(
        <Link to={{pathname:"/details",data:{dataRecived:{props}}}}>
        <div className="Moviecard_main">
            <img src={`https://image.tmdb.org/t/p/w500/${props.url}`} height="100%" width="100%"></img>
            <h4>{props.title} <br/> </h4>
        
            <div><p>{props.date}  &ensp; | &ensp;  <span>{props.vote}</span></p></div>
            

        
        </div>
        </Link>

    )
}
export default Moviecard;