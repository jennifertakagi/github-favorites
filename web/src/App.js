import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api"

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories')
      .then(response => {
        const { data = [] } = response;
        setRepositories(data);
      })
  }, [])

  async function handleAddRepository() {
    const newRepository = {
      techs: ['techTest'],
      title: 'Test',
      url: 'https://github.com'
    };

    api.post('/repositories', newRepository)
      .then(response => {
        const { data = [] } = response;
        setRepositories([...repositories, data]);
      })
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);

    const newRepositories = repositories.filter(repository => repository.id !== id);
    setRepositories(newRepositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => {
          return (
            <li 
              key={repository.id}
            >
              {repository.title}
              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </li>
          )
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
