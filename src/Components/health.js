import React from "react";

const Listcardtwo= ({Imagename,Titlename}) => {
    return(
<div className='secondcards'>
            <div className='secondseticons'> <img src={Imagename} alt='icons'></img> </div>
            <div className='secondtitle'>{Titlename}</div>
            <div className='secondpara'>Health insurance will not only give your employees and their families enough financial security, but an overall sense of satisfaction that their employer actually cares about them.</div>
          </div>
    );
}
export default Listcardtwo;