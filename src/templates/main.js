
import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
const MainContainer = () => {
    const boxRef = useRef();
    const [stan, setStan] = useState(0);
    const [stanY, setStanY] = useState(0);
    const [btn, setBtn] = useState(true);
   
    const randomX = gsap.utils.random(-200, 200, 1, true);
    const [endX, setEndX] = useState(0);
    useEffect(() => {
        gsap.to(boxRef.current, {
          x: endX
        });
      }, [endX]);
    useEffect(() => {
        gsap.to(boxRef.current, { x: stan, y: stanY, color: "blue" });
        console.log(`X: ${stan} Y: ${stanY}`)
        });

    useEffect(() => {
        setStan(0);
        setStanY(0);
    }, [btn])
   
    const handleScroll = () => {
        setStanY(stanY - 50);
        console.log(stanY)
    }

    return (
        <div style={{display: "grid", placeItems: "center", margin: "30px", width: "100%", height: "80vh"}}>
            <div>
                <div className="box" ref={boxRef} style={{border: "1px solid #ccc", display: "block",width: "300px", padding: "10px", background: "tomato" }} contentEditable>Hello</div>
                
            </div>
            <div style={{zIndex: "1"}}>
                <button onClick={() => setStan(stan - 50)}>lewo</button>
                <button onClick={() => setStan(stan + 50)}> prawo</button>
                <button onClick={() => setBtn(!btn)}> reset</button>
                <button onScroll={handleScroll} onClick={() => setStanY(stanY - 50)} onMouseDown={() => setStanY(stanY - 50)}> gora</button>
                <button onClick={() => setStanY(stanY + 50)} onMouseDown={() => setStanY(stanY + 50)}> dol</button>
                <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>
            </div>
        </div>)
};

export default MainContainer;