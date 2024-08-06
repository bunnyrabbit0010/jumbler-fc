
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import getWords from './getWords';
  
function App() {

  const addWords = () => {
    console.log('Invoking getWords()')
      getWords().then(response => {
      // Do something with the response
      console.log('*!*!');
      console.log(response);
      console.log(typeof(response));
      return JSON.parse(response);
    })
    .then(jsonArray => {
      if (jsonArray) {
        const container = document.getElementById('container');
        const ul = document.createElement('ul');
    
        jsonArray.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.Word} - ${item.jumbled_word}`;
          console.log(li.textContent);
          ul.appendChild(li);
        });
    
        container.appendChild(ul);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });  
  };

  useEffect(() => {
    addWords();
  }, []);

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p></p>
 
          <div id="container">
           </div>
         </div>
      );
    }
  export default App;

