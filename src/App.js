import React from 'react';
import './App.css';
import Header from './Header';


import Pdf from './Files/career.pdf';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-Container">
        <img class="Vinyl" src = {require("./Images/vinyl.png")}/>
        <div className="Vinyl-Label">
          <br/>
          <h1>HARRY O'SULLIVAN</h1>
          <br/>
          <br/>
          <div className="Speed-Label">
            SRTTX024 EP <br/>
            33 1/3 RPM <br/>
            © 1994
          </div>
          <div className="Side-Label">
            SIDE A
          </div>
          < div className="Track-Label">
            <li> 
              <a href={Pdf} target="_blank">A1. "CAREER"</a>
            </li>
            <li> 
              <a href="https://soundcloud.com/harryosullivan" target="_blank">B1. "MUSIC"</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/* <Link to="/resume">A1. RESUME</Link> */ 