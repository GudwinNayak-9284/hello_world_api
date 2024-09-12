import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('English');
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState('');

  const fetchGreeting = async () => {
    try {
      const response = await fetch(`http://localhost:5000/hello?language=${language}`);
      const data = await response.json();

      if (response.ok) {
        setGreeting(data.msgText); 
        setError(''); 
      } else {
        setGreeting('');
        setError(data.error_message);
      }
    } catch (err) {
      setGreeting('');
      setError('Error fetching the greeting');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World API Client</h1>
        <label>
          Choose a language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>

        <button onClick={fetchGreeting}>Get Greeting</button>

        {greeting && <p className="greeting">Greeting: {greeting}</p>}
        {error && <p className="error">Error: {error}</p>}
      </header>
    </div>
  );
}

export default App;
