import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import './App.css';
import skull from "./skull.svg";
import thumbs from "./thumbs-up.svg";
import rotate from "./rotate.svg";
import arrow from "./arrows-rotate.svg";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(DrawSVGPlugin, GSDevTools, SplitText);
function App() {
  // CHANCE BAR
  const [bar, setBar] = useState(0);
  // RESULTS
  const [arr, setArr] = useState([]);
  const newArr = [];
  
  const largerThanResult = arr.filter( number => {
    return number > bar
  })

  const smallerThanResult = arr.filter ( number => {
    return number <= bar
  })
  // RANDOM NUMBER
  const [endX, setEndX] = useState(0);
    const boxRef = useRef();
    const randomX = gsap.utils.random(0, 100, 1, true);
    useEffect(() => {
        gsap.to(boxRef.current, {
        //   x: endX
        });
      }, [endX]);
  // COLORS
  const fail = "#901717";
  const success = "#34AB55"
  // const listItems = arr.map((number, index) => <li className="list-inline-item mb-2" style={{background: `${number > bar ? fail : success}`}}>{number}</li>);
  const listItems = arr.map((number, index ) => <div className="results-squares" style={{background: `${number > bar ? fail : success}`}}>{number}</div>)
  // INFO
  const successText = [
    `Geronimoooooooooooooo.... 🎯`,
    `Mamy to 🧐`,
    `Albo grubo albo wcale 😁`,
    `Like a boss 😎`,
  ];
  const failText = [
    `Czy ${bar}% to aby nie za mało ? 😎`,
    `Znowu Ci nie pykło 🤣`,
    `A Ty dalej sie łudzisz ? 😆`,
    `Ktoś Ci podrzucił niezłą 🐖`
  ]
  // RESET ARRAY
  const Reset = () => {
    setArr([]);
    alert("Zresetowano pomyślnie")
  }
  const Clicked = () => {
    setEndX(randomX());
  }
  const MouseUp = e => {
    setArr(arr => [...arr, endX]);
  }
  console.log(arr)
  return (
    <div className="App">
      <header className="border-b">
        <div className="text-center mt-2">
            <h4 style={{color: "#2C3E50"}}>🎲 Random Number Generator</h4>
        </div>
      </header>
      <main>
        <div className="container px-3">
          <div className="row row-cols-1">
              <div className="col">
                  <div className="place-center mt-3">
                      
                      <div className="text-center h-200 place-center" style={{borderRadius: "200px", border: `2px solid ${endX > bar ? fail : success}`}}>
                          <h1 style={{fontSize: "100px", fontFamily: "Poppins, sans-serif", color: `${endX > bar ? fail : success}`}}>{endX}</h1>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="place-center mt-3" style={{fontFamily: "Poppins, sans-serif"}}>
                      <h2 className="mb-4 text-center" style={{fontFamily: "Poppins, sans-serif", color: "#2C3E50"}}>{endX > bar ? failText[Math.floor(Math.random() * failText.length)] : successText[Math.floor(Math.random() * successText.length)]}</h2>
                      <div className="line-bg">
                          <div className="line-bg" style={{background: success, width: `${bar}%`}}></div>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="w-100 mt-3 border-full grid py-2" style={{background: "#F9F9F9"}}>
                    <div className="flex">
                    
                    📉 Łącznie {arr.length}x
                    </div>
                    <div className="flex">
                    💣 Porażka {largerThanResult.length}x
                    </div>
                    <div className="flex">
                      
                      🎯 Sukces {smallerThanResult.length}x
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="col">
              <p className="mt-2" style={{color: "#7E7C7C"}}>Tablica wylosowanych liczb</p>
          </div>
          <div className="row">
              <div className="col">
                  <div className="abc">
                      <div className="list-inline columns12">
                          {listItems.reverse()}
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
      </main>
      <footer>
      <div className="container">
          <div>
            <p>Podaj procent szansy na sukces i kliknij generuj liczbę</p>
            <div className="grid-custom">
                  <input className="p-2 inputNumber" type="number" onChange={(e) => setBar(e.target.value)} min="1" max="100" />
                  <button className="text-nowrap btn-custom" type="button" style={{background: "#2C3E50"}} onClick={Clicked} onMouseUp={MouseUp}>generuj liczbę</button>
                  <button className="btn-custom place-center" type="button" style={{background: "#2C3E50"}} onClick={() => Reset()}>reset</button>
                
            </div>
              <div className="selection">
                <select>
                  <option disabled selected>Twórz wiele jednocześnie [wkrótce]</option>
                  <option disabled>Wylosuj 3 liczby</option>
                  <option disabled>Wylosuj 10 liczb</option>
                  <option disabled>Wylosuj 16 liczb</option>
                  <option disabled>Wylosuj 50 liczb</option>
                  <option disabled>Wylosuj 100 liczb</option>
                  <option disabled>Wylosuj 200 liczb</option>
                  <option disabled>Wylosuj 300 liczb</option>
                  <option disabled>Wylosuj 500 liczb</option>
                  <option disabled>Wylosuj 1000 liczb</option>
                </select>
                <button className="btn-custom" style={{background: "#2C3E50"}}>stwórz</button>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
