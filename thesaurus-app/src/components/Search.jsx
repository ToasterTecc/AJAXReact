import PropTypes from 'prop-types';
import axios from "axios";

function SearchForm({word, wordSetter, resultSetter}) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call a function or pass the search term to the parent component to handle the API request
    try{ 
    const response = await axios.get(`https://api.datamuse.com/words?ml=${word}&max=10`)
    console.log(response);
    resultSetter(response.data);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search term"
        value={word}
        onChange={(e)=> wordSetter(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  );
}
SearchForm.propTypes = {
  word: PropTypes.string,
  wordSetter: PropTypes.func,
  resultSetter: PropTypes.func
}

export default SearchForm;
