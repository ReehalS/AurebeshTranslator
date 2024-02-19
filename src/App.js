import React, { useState } from 'react';
import './App.css';
import AurebeshKeyboard from './views/aurebeshKeyboard';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isAurebesh, setIsAurebesh] = useState(false);


  const translateText = () => {
    setOutputText(inputText);
  };

  const swapText = () => {
    setIsAurebesh((prevIsAurebesh) => !prevIsAurebesh);
  };

  return (
    
    <div className="container">
      <div className="textboxContainer">
        <div className="col">
          <input
              type="text"
              className={`${isAurebesh ? 'au' : 'en'} textbox size20`}
              placeholder={isAurebesh ? 'Enter text in Aurebesh' : 'Enter text in English'}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
        </div>
        <div className="col">
          <input
            type="text"
            className={`${isAurebesh ? 'en' : 'au'} textbox size24`}
            placeholder={isAurebesh ? 'English output' : 'Aurebesh output'}
            value={outputText}
            readOnly
          />
        </div>
      </div>
      <div className="btnContainer">
        <div className="col">
          <button className="btn btn-outline-secondary" type="button" onClick={translateText}>
            Translate
          </button>
          <button className="btn btn-outline-secondary" type="button" onClick={swapText}>
            Swap
          </button>
          
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col">
          <AurebeshKeyboard onKeyClick={(key) => setInputText((prevText) => prevText + key)} />
        </div>
      </div>

    </div>
  );
}

export default App;
