import React,{useState,useEffect} from "react";
import './Newmovie.css';
import axios from "axios";
import Moviecard from "../../Reusecomp/Moviecard/Moviecard";
import { render } from "@testing-library/react";



function Newmovie() {
const[data,setData]=useState();

useEffect(()=>{
  async function getData(){
    const res=await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=eaf53862e5de00ba2e8d2d05101df656")
    setData(res.data);
  }
  getData();

},[])
    const renderComingmov=(value,index)=>{
    if((index>9 && index<15)){
      return(
      <div ><Moviecard title={value.original_title} des={value.overview} url={value.poster_path} date={value.release_date} vote={value.vote_average}/>   
      </div>

    
    )}
}
    const renderNewmov=(value,index)=>{
        if((index>14 && index<19)){
          return(
          <div ><Moviecard title={value.original_title} des={value.overview} url={value.poster_path} date={value.release_date} vote={value.vote_average}/>   
          </div>
      
          
          )}

    }
  return (
    <div className="Newmovie_Main">
      <div className="Margin_comingsoon" style={{height:"60%", width:"85%"}}>
       {
        data != null ? data.results.map((value,index)=>{return(renderComingmov(value,index))
        }):console.log("not working")
      } 
      
       </div>
       <div className="Margin_new">
       {
        data != null ? data.results.map((value,index)=>{return(renderNewmov(value,index))
        }):console.log("not working")
      } 
      
       </div>
    </div>

    )
}

export default Newmovie;