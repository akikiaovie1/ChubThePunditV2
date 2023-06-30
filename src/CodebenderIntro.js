import { useState } from "react";

const CodebenderIntro = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const getData = async (input = prompt) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/openai?prompt=${input}`
      );
      const aiResponse = await response.json();
      setResult(aiResponse);
      setLoading(false);
      setError("");
    } catch (e) {
      setError("Oops");
    }
  };

  const updatePrompt = (event) => {
    event.preventDefault();
    setPrompt(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    getData(prompt).then();
  };

  const renderResponse = () => {
    return (
      <div className="response">
        <p>{error || result}</p>
      </div>
    );
  };

  return (
    <>
      <audio id="backgroundAudio" autoPlay loop>
        <source src="Elevator-music.mp3" type="audio/mpeg" />
      </audio>
      <div className="App">
        <h1 className="main_text">Chub The Pundit</h1>
        <div className="sub_div">
          <p className="sub_text">
            Chub, the tipsy English football pundit who happens to be a frog,
            brings hilarious and unpredictable meme-worthy commentary, turning
            dull moments into uproarious comedy spectacles that fans love.
          </p>
        </div>
        <div className="container">
          <img alt="SuperViral.ai logo" width="380" src="coach.png" />
          <div id="chatbox">
            <div id="conversation" className="text"></div>
            <form id="mainForm">
              <input id="input-field" placeholder="Say anything" />
              <button id="mainButton" onClick={submitForm}>
                <span id="spinner" style={{ display: "none" }}>
                  Loading...
                </span>
                <span id="arrow">Lets Go</span>
              </button>
            </form>
            <div id="response" className="response text">
              <p id="result"></p>
            </div>
          </div>
        </div>

        <footer>
          <ul className="social">
            <li className="media">
              <a
                href="https://twitter.com/WhatToDoChub"
                target="_blank"
                className="connect"
              >
                <img className="icon_media" src="twitter.png" alt="youtube" />
              </a>
            </li>
            <li className="media">
              <a
                href="https://discord.gg/uwC46Bff"
                target="_blank"
                className="connect"
              >
                <img className="icon_media" src="discord.png" alt="youtube" />
              </a>
            </li>
            <li className="media">
              <a
                href="https://www.youtube.com/channel/UC1QDKygTVRxNRWfj8KXkBiQ"
                target="_blank"
                className="connect"
              >
                <img className="icon_media" src="youtube.png" alt="youtube" />
              </a>
            </li>
            <li className="media">
              <a
                href="https://github.com/akikiaovie1"
                target="_blank"
                className="connect"
              >
                <img className="icon_media" src="github.png" alt="youtube" />
              </a>
            </li>
            <li className="media">
              <a
                href="https://www.linkedin.com/in/okotie-udumerbraye-emmanuel-27009020b/"
                target="_blank"
                className="connect"
              >
                <img className="icon_media" src="linkedin.png" alt="youtube" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default CodebenderIntro;
