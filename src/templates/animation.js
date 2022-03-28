import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(DrawSVGPlugin, GSDevTools, SplitText);
const Animation = () => {
    const [endX, setEndX] = useState(0);
    const boxRef = useRef();
    const randomX = gsap.utils.random(0, 100, 1, true);
    useEffect(() => {
        gsap.to(boxRef.current, {
        //   x: endX
        });
      }, [endX]);
 return (
     <div>
        <div class="container-fluid">
            <div>
                
            </div>
            <div ref={boxRef} class="shadow-sm" style={{background: "#ffcc00", display: "inline-block"}}>
                <h1 class="display-1 p-5 m-0" style={{background: "#ffcc00", display: "inline-block"}}>{endX}</h1>
            </div>  
        </div>
        <button onClick={() => setEndX(randomX())} class="btn btn-primary"> RNG </button>
     </div>
 )
}
export default Animation;