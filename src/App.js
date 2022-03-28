import React, { useRef, useEffect, useState } from "react";

// PLUGINS
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";

// STYLES
import "./App.css";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, SplitText);
// APP
function App() {
  // CHANCE BAR
  const [bar, setBar] = useState(0);

  // RESULTS
  const [arr, setArr] = useState([]);
  // LARGER || SMALLER
  const largerThanResult = arr.filter((number) => {
    return number > bar;
  });

  const smallerThanResult = arr.filter((number) => {
    return number <= bar;
  });

  // RANDOM NUMBER
  const [endX, setEndX] = useState(0);
  const boxRef = useRef();
  const randomX = gsap.utils.random(0, 100, 1, true);
  useEffect(() => {
    gsap.to(boxRef.current, {});
  }, [endX]);
  // COLORS
  const fail = "#901717";
  const success = "#34AB55";
  const listItems = arr.map((number, index) => (
    <div
      className="results-squares"
      style={{ background: `${number > bar ? fail : success}` }}
    >
      {number}
    </div>
  ));

  // INFO
  const successText = [
    `Geronimoooooooooooooo.... 🎯`,
    `Trafiłeś 🧐`,
    `Albo grubo albo wcale 😁`,
    `Like a boss 😎`,
  ];
  const failText = [
    `Czy ${bar}% to aby nie za mało ? 😎`,
    `Znowu Ci nie pykło 🤣`,
    `A Ty dalej sie łudzisz ? 😆`,
    `Ktoś Ci podrzucił niezłą 🐖`,
    `Zonk 😹`,
  ];
  // RESET ARRAY
  const Reset = () => {
    setArr([]);
    setBar(0);
    alert("Zresetowano pomyślnie");
  };
  // GENERATE NUMBER
  const Clicked = () => {
    setEndX(randomX());
  };
  // PUSH TO ARRAY ON MOUSEUP
  const MouseUp = (e) => {
    setArr((arr) => [...arr, endX]);
  };
  // INITIAL TEXT
  const Info = () => {
    if (endX === 0 && arr.length === 0) {
      return "Zaczynamy zabawe";
    } else if (endX > bar) {
      return failText[Math.floor(Math.random() * failText.length)];
    } else {
      return successText[Math.floor(Math.random() * successText.length)];
    }
  };

  return (
    <div className="App">
      <header className="border-b">
        <div className="text-center mt-2">
          <h4 style={{ color: "#2C3E50" }}>🎲 Random Number Generator</h4>
        </div>
      </header>
      <main>
        <div className="container px-3">
          <div className="row row-cols-1">
            <div className="col">
              <div className="place-center mt-3">
                <div
                  className="text-center h-200 place-center"
                  style={{
                    borderRadius: "200px",
                    border: `2px solid ${endX > bar ? fail : success}`,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "100px",
                      fontFamily: "Poppins, sans-serif",
                      color: `${endX > bar ? fail : success}`,
                    }}
                  >
                    {endX}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="place-center mt-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <h2
                  className="mb-4 text-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#2C3E50",
                  }}
                >
                  {Info()}
                </h2>
              </div>
            </div>
            <div className="col">
              <div
                className="w-100 mt-3 border-full grid py-2"
                style={{ background: "#F9F9F9" }}
              >
                <div className="flex">📉 Łącznie {arr.length}x</div>
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
            <p className="mt-2" style={{ color: "#7E7C7C" }}>
              Tablica wylosowanych liczb
            </p>
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
          <div className="col">
            <div
              className="place-center mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p>✔️ Podaj procent szansy na sukces i kliknij generuj liczbę</p>
              <div className="line-bg mb-3">
                <div
                  className="line-bg"
                  style={{ background: success, width: `${bar}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid-custom">
              <input
                className="p-2 inputNumber"
                type="number"
                onChange={(e) => setBar(e.target.value)}
                min="1"
                max="100"
                value={bar}
              />
              <button
                className="text-nowrap btn-custom"
                type="button"
                style={{ background: "#2C3E50" }}
                onClick={Clicked}
                onMouseUp={MouseUp}
              >
                generuj liczbę
              </button>
              <button
                className="btn-custom place-center"
                type="button"
                style={{ background: "#2C3E50" }}
                onClick={() => Reset()}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
