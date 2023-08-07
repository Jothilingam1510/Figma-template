import React from "react";

const Listcardtwo= ({Imagename,Titlename,Paragraph}) => {
    return(
<div className='secondcards'>
            <div className='secondseticons'> <img src={Imagename} alt='icons'></img> </div>
            <div className='secondtitle'>{Titlename}</div>
            <div className='secondpara'>{Paragraph}</div>
          </div>
    );
}
export default Listcardtwo;