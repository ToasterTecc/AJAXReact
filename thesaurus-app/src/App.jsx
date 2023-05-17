import SearchForm from './components/Search';
import ResultsDisplay from './components/Results';
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [word, setWord] = useState("");

  return (
      <div>
        <h1>Thesaurus App</h1>
        <SearchForm wordSetter={setWord} resultSetter={setResults} word={word}/>
        <ResultsDisplay data={results}/>
      </div>
  );
}

export default App;

