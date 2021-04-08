import React from "react";
import Button from "../Button/Button";
import "./Moviedetail.css";
import Thumb from "../../Pics/thumb.png";

function Moviedetail(props) {
  console.log(props);

  return (
    <div
      className="Movdetail_card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.location.data.dataRecived.props.url})`,
      }}
    >
      <div className="Mov_Inform">
        <div></div>
        <div className="Mov_name">
          {" "}
          {props.location.data.dataRecived.props.title}{" "}
        </div>
        <div className="Mov_due">
          <div className="year">
            <li>{props.location.data.dataRecived.props.date}</li>
          </div>
          <div className="time">
            <li>{props.location.data.dataRecived.props.vote}</li>
          </div>
        </div>
        <div className="Mov_story">
          <div></div>
          <div>
            <h1 style={{ fontSize: "12px", textAlign: "center" }}>
              {props.location.data.dataRecived.props.des}
            </h1>
          </div>
        </div>
        <div className="Mov_Btn">
          <div></div>
          <div style={{ height: "30px", width: "100px" }}>
            <Button title="Watch Movie" />
          </div>
          <div style={{ height: "30px", width: "100px" }}>
            <Button title="Trailer" />
          </div>
        </div>
        <div className="Like_btn">
          <div></div>
          <div>
            {" "}
            <img src={Thumb} height="100%" width="100%"></img>
          </div>
          <div></div>
          <div>
            <img src={Thumb} height="100%" width="100%"></img>
          </div>
          <div></div>
          <div>
            {" "}
            <img src={Thumb} height="100%" width="100%"></img>
          </div>
        </div>
        <div className="Mov_dis">
          <div></div>
          <div>
            {" "}
            Cast <br />
            <p
              style={{
                fontSize: "10px",
                fontWeight: "lighter",
                lineHeight: "0.9",
              }}
            >
              {" "}
              Directed by Anthony and Joe Russo and written by Christopher
              Markus and Stephen McFeely, the film features an ensemble cast
              including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris
              Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom
              Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony
              Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave
              Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviedetail;
