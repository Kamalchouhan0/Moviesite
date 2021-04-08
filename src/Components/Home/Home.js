import React from "react";
import Poster from "../Poster/Poster";
import Movielist from "../Movielist/Movielist";
import Newmovie from "../Newmovie/Newmovie";
import Footer from "../Footer/Footer";

function Home(){
    return(
        <div className="App_Main">
      
    <Poster/>
     <Movielist/>
     <Newmovie/>
     <Footer/>

      {/* <div className="Mov_detail"> <Moviedetail /></div>  */}
     </div>
    )
} export default Home;