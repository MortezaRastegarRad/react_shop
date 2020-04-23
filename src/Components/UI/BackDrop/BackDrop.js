import React from "react";
import './BackDrop.css'

const BackDrop = (props) => {
    if (props.show) {
        return (
            <div className='BackDrop' onClick={props.handler}>

            </div>
        );
    } else {
        return null;
    }
};

export default BackDrop;