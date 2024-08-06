
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

/*
function addWords() {
  console.log('Invoking getWords()')
  //const wordMap =  getWords();

  getWords().then(response => {
    // Do something with the response
    console.log('*!*!');
    console.log(response);
    console.log(typeof(response));
  
    return response.json(); // Return the parsed JSON data
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
 
}
*/

/*
  getWords().then(response => {
    // Do something with the response
    console.log('*!*!')
    console.log(response);
    console.log(typeof(response)));
    .then (
    const jsonArray = JSON.parse(response);
    if(jsonArray) {
      const container = document.getElementById('container');

      // Create a new paragraph element
      const paragraph = document.createElement('p');
      paragraph.textContent = 'This is a dynamically added paragraph.';

      const ul = document.createElement('ul');
      for (let i = 0; i < jsonArray.length; i++) {
        console.log(jsonArray[i].Word, jsonArray[i].jumbled_word);
        const li = document.createElement('li');
        li.textContent = `${item.Word} - ${item.jumbled_word}`;
        ul.appendChild(li);      
      }
      container.appendChild(ul);
    }
  }
}
  */



 /*
 

  <!--<ul>
            {
              response.forEach(item => {
                console.log(item.word, item.jumbled_word);
                <li>item.Word</li>
              })
            }
          </ul> 

                   <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>


  if (wordMap) { // Check if wordList is not undefined
    console.log("Logging response after getWords()" + wordMap);
    console.debug(wordMap);

    if (wordMap.length > 0) {  // Check if wordList has elements
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <ul>
              {wordMap.map((item, index) => (
                <li key={index}>{item.jumbled_word}</li>
              ))}
            </ul>
        </div>
      );
    } else {
      // Handle the case where wordList is empty (e.g., display message)
      return <div>No words found</div>;
    }
  } else {
    // Handle the case where getWords() returns undefined (e.g., display error message)
    return <div>Error fetching data</div>;
  }
    return <div>No words found</div>;*/
