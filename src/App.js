import "./App.css";
import React from "react";
import Concepts from "./components/Concepts";
import Tests from "./components/Tests";
import Quizes from "./components/Quizes";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ background: "linear-gradient(270deg, #800080 0%, #ff864c 100%)", color: "white" }}>
        <a
          className="navbar-brand"
          href="#"
          style={{
            border: "solid 4px",
            borderRadius: "5px",
            padding: "10px",
            marginLeft: "10px",
            color: "purple",
            fontSize: "25px"
          }}
        >
          <b>Learning Maths</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginRight: "10px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#concepts">
                 <span className="sr-only" style={{ color: "white" }}>Concepts</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quizes">
              <span className="sr-only" style={{ color: "white" }}>Quizes</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#videos">
              <span className="sr-only" style={{ color: "white" }}>Videos</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="concepts" id="concepts" style={{ height: "504px", border: "solid red 2px", margin: "20px 20px 0px 20px", boxShadow: "0px 3px 100px rgba(0, 0, 0, 0.1)"}}>
        <h1 style={{ background: "linear-gradient(270deg, #800080 0%, #ff864c 100%)", color: "white", margin: "2px" }}>Concepts</h1>
        <Concepts />
      </section>
      <section id="quizes" style={{ height: "fit-content", border: "solid red 2px", margin: "20px 20px 0px 20px", boxShadow: "0px 3px 100px rgba(0, 0, 0, 0.1)" }}>
        <Tests />
      </section>
      <section id="">
        <Quizes />
      </section>
      <section id="videos" style={{ border: "solid red 2px", margin: "20px 20px 0px 20px", boxShadow: "0px 3px 100px rgba(0, 0, 0, 0.1)" }}>
        <Videos />
      </section>
    </div>
  );
}

export default App;
