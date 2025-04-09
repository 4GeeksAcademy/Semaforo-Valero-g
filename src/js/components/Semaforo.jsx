import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

//import "../../styles/index.css";
let idInterval= 0;

const Semaforo=  () =>{
    let redSelected = "";
    let yellowSelected = "";
    let greenSelected = "";
    let purpleSelected = "";
    const [buttonText, setButtonText] = useState("Añade Púrpura");
    const [color, setColor] = useState("none");
    const [existPurple, setPurple] = useState(false);
    const [containerHeight, setContainerHeight]= useState("700px");
    const [purpleDisplay, setPurpleDisplay]= useState("none");

    

    switch (color){
        case "red":
            redSelected = "selected"
            yellowSelected= "";
            greenSelected = "";
            purpleSelected = "";
            break;
        case "yellow":
            redSelected = ""
            yellowSelected= "selected";
            greenSelected = "";
            purpleSelected = "";
            break;
        case "green":
            redSelected = ""
            yellowSelected= "";
            greenSelected = "selected";
            purpleSelected = "";
            break;
        case "purple":
            redSelected = ""
            yellowSelected= "";
            greenSelected = "";
            purpleSelected = "selected";
            break;
        default:
            redSelected = ""
            yellowSelected= "";
            greenSelected = "";
            purpleSelected = "";
            break;
    }

   
    
    
    const cambiaColor = () =>{
                if (color === "none") setColor("red");
                else if (color === "red") setColor("yellow");
                else if (color ==="yellow") setColor("green");
                else if (color === "green") 
                    {
                        if (existPurple==true) setColor("purple");
                        else setColor("red");
                    }
                else if (color === "purple") setColor("red");
    }

    const togglePurple = () => {

        if (!existPurple){
            setPurple(true);
            setContainerHeight("900px");
            setPurpleDisplay("flex");
            setButtonText("Quita Púrpura");
        }
        else{
            setPurple(false);
            setContainerHeight("700px");
            setPurpleDisplay("none");
            setButtonText("Añade Púrpura");
        }
    }

    return(
        <div id ="trafficLight">
            <div id="trafficTop" ></div>
            <div id="container" style ={{height:containerHeight}}>
                <div className = {`red_light ${redSelected}`} onClick={()=> setColor("red")}></div>
                <div className = {`yellow_light ${yellowSelected}`} onClick={()=> setColor("yellow")}></div>
                <div className = {`green_light ${greenSelected}`} onClick={()=> setColor("green")}></div>
                <div className = {`purple_light ${purpleSelected}`} onClick={()=> setColor("purple")} style={{display:purpleDisplay}}></div>
            </div>
            <div>
                <button className= "btn btn-primary mt-1" onClick= {cambiaColor}>Cambia de color!</button>
            </div>
            <div>
                <button className= "btn btn-primary mt-1" onClick= {togglePurple}>{buttonText} </button>
            </div>
        </div>
    )
}

export default Semaforo;