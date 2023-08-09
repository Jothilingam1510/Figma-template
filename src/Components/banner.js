import React from "react";
import rarrow from '../image/rarrow.png'

const Listcardfour=({Mainclass,text,imageone,images,textone,Idforcontent,classone})=>{
    return(
        <div className={Mainclass}>
        <div className="taw">{text}</div>
       <div className="ithra"><div className={classone}><img className={classone} src={imageone}  alt=""/></div></div>
       <div className='offerandlearnmore' id={Idforcontent}>

       <div className="content">{textone}</div>
       <div className='whitesbox'><img className='rarrow' src={rarrow} alt=''/><div className='lm'>Learn <div className='m'>More</div> </div></div>

        </div>
        </div>
    );
}
export default Listcardfour;