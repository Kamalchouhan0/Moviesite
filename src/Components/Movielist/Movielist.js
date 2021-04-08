import React,{useState,useEffect} from "react";
import './Movielist.css';
import axios from "axios";
import Moviecard from "../../Reusecomp/Moviecard/Moviecard"


function Movielist() {

  const [data,setData]=useState();
  // localStorage.setItem("lastname", "Smith");
  useEffect(() => {
        async function getData(){
          const res = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=eaf53862e5de00ba2e8d2d05101df656')
         
          setData(res.data);

        }
          getData();
  },[]);
  const renderMovieitem=(value,index)=>{
       if(index<10){return(<div style={{height:"92%",width:"90%"}}><Moviecard des={value.overview} 
       title={value.original_title} url={value.poster_path} date={value.release_date} vote={value.vote_average}/></div>
       
       
       )}
  }

  return (
    <div className="Movielist_Main">
      <div className="Margin_list">
      {
        data != null ? data.results.map((value,index)=>{
          return(renderMovieitem(value,index))


        }):console.log("not working")
      } 
         </div>
      

       </div>


    )
}

export default Movielist;