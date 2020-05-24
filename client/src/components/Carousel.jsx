import React from 'react';
import './Carousel.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';


export default function Carousel(props){
    // const timer = () =>{
    //         if(currentIMG < imgs){
    //             currentIMG++;
    //         }
    //         else{
    //             currentIMG = 1;
    //         }
    //     return currentIMG;
    // }

    const [currentIMG, updateState] = useState(1);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }

    const previousIMG = usePrevious(currentIMG);

    useEffect(() => {
       window.setInterval(()=>{
        updateState(currentIMG => currentIMG + 1 < 5 ? currentIMG + 1 : 1)}, 7000);
      }, []);

    useEffect(() => {
        let x = document.querySelectorAll('#buttons-container .buttons');
        x[currentIMG-1].style.background = "black";
        // currentIMG - 1 > 0 ? x[currentIMG - 2].style.background = "transparent" : x[x.length - 1].style.background = "transparent";
        if(previousIMG) x[previousIMG-1].style.background = "transparent";
    }, [currentIMG]);

    return(
        <section id="container" style={{backgroundImage:"url("+"http://localhost:4000/sample/"+currentIMG+".jpg"+")"}}>
            <img src={"http://localhost:4000/sample/"+currentIMG+".jpg"} alt="" />
            <div id="buttons-container">
                <div onClick={()=>updateState(1)} className="buttons"></div>
                <div onClick={()=>updateState(2)} className="buttons"></div>
                <div onClick={()=>updateState(3)} className="buttons"></div>
                <div onClick={()=>updateState(4)} className="buttons"></div>
            </div>
        </section>
    );
}