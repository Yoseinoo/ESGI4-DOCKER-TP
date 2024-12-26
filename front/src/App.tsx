import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [api, setApi] = useState();

  useEffect(() => {
    const fetchApi = async() => {
      try {
        const response = await axios.get('http://localhost:5000/api');
        setApi(response.data);
        console.log(response.data);
      } catch (e) {
        console.error('Error fetching api:', e);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Réponse : {JSON.stringify(api, null, 2)}
        </div>
      </header>
    </div>
  );
}

export default App;
