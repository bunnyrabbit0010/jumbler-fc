import logo from './logo.svg';
import './App.css';
import getWords from './getWords';


function App() {
  console.debug('Invoking getWords()')
  const wordMap = getWords();
 
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
}

export default App;
