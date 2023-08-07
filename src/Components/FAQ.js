import React from "react";
import plus from '../image/plus.png'
import './FAQ.css'

const Listcardthree= ({whatquestion}) => {
    return(
<div className="questionbox">
    <div className="plus"><img src={plus} alt=""/></div>
    <div className="whatquestion">{whatquestion}</div>

</div>
    );
}
export default Listcardthree;