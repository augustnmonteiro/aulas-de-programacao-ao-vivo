import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function App() {

  const [letter, setLetter] = useState("");

  function randomLetter() {
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
      setLetter("A");
    } else if (random == 1) {
      setLetter("B");
    } else {
      setLetter("C");
    }
  }

  useEffect(() => {
    function timeoutLetter() {
      setTimeout(() => {
        randomLetter();
        setTimeout(() => {
          setLetter("");
          timeoutLetter();
        }, 1000);
      }, 3000);
    }
    timeoutLetter();
  }, []);
  

  return (
    <div className="App">

      <span>{letter}</span>

    </div>
  );
}

export default App;
