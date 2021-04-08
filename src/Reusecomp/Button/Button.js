import React from "react";
import "./Button.css";

function Button(props){
    return(
        <div className="Btn" >
            {props.title}
        </div>
    )
}

export default Button;