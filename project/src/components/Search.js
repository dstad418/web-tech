import React, { useState } from 'react';
import axios from 'axios';
import './../App.css';


function Search() {
  const [query, setQuery] = useState('');
  const [character, setCharacter] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) {
      setMessage('No name has been entered.');
      return;
    }

    try {
      const response = await axios.get(`https://thronesapi.com/api/v2/Characters`);
      if (response.data && response.data.length) {
        const foundCharacter = response.data.find(char =>
          char.firstName === query ||
          `${char.firstName} ${char.lastName}` === query
        );
        
        if (foundCharacter) {
          setCharacter(foundCharacter);
          setMessage('');
        } else {
          setMessage('No match found.');
          setCharacter(null);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    return (
        <div className="container search-bar">
        <h1>Search for a Character</h1>
        <input
            type="text"
            placeholder="Enter first name or full name"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {message && <p>{message}</p>}
        {character && (
            <div>
            <h2>Character Details</h2>
            <p>First Name: {character.firstName}</p>
            <p>Last Name: {character.lastName}</p>
            <p>Full Name: {`${character.firstName} ${character.lastName}`}</p>
            <p>Title: {character.title}</p>
            <p>Family: {character.family}</p>
            <img src={character.imageUrl} alt={`${character.firstName} ${character.lastName}`} />
            </div>
        )}
        </div>
    );
}

export default Search;