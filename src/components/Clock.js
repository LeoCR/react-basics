import React from 'react';
import ReactDOM from 'react-dom';
export default function  ClockTime(){
        const clockElement = (
            <div>
            <h2>The Hour is:  {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        return(
            ReactDOM.render(
                clockElement,
                document.getElementById('clock')
            )
        );
}

