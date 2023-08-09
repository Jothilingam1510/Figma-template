import React from "react";
import './webfooter.css'

const Listcardfive = ({imagename,Date,News,Idname}) => {
    return(
        <div className="last" >
        <img className='imagepic' src={imagename} alt=""/>
        <div className="Dates">{Date}</div>
          <div className="new">News</div>
              <div className="news"id={Idname}>{News}</div>
  
  </div>
          
           
        
              
       
     
    );
}
export default Listcardfive;