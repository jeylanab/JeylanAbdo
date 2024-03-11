import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button onClick={fetchData}>Search</button>
      </div>
      
      <h1>Data from API:</h1>
      {data.length > 0 && (
        <div>
          <h1>{data[0].word}</h1>
          <h2>Meanings:</h2>
          <ul>
            {data[0].meanings.map((meaning, index) => (
              <li key={index}>{meaning.definitions[index].definition}</li>
            ))}
            
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

