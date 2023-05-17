/*eslint react/prop-types: 0*/

function ResultsDisplay({ data }) {
  return (
    <div>
    {data.length ? <h2>Results</h2> : <></>}
      <ol>
        {data.map((result, index) => (
          <li key={index}>{result.word}</li> //each object has a word property
        ))}
      </ol>
    </div>
  );
}

export default ResultsDisplay;