import React, { useState, useCallback } from 'react';
import RepositoryCard from '../../components/RepositoryCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

import './styles.css';
import api from '../../services/api';

function MainPage() {
  const [user, setUser] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = useCallback((newUser) => {
    setUser(newUser);
    setErrorMessage('');
  }, [user, errorMessage]);

  const handleUserSearch = useCallback(() => {
    try {
      setRepositories([]);
      setShowLoading(true);

      api.get(`/starred/${user}`)
        .then((response) => {
          const data = response;
          const repositories = (data && data.data && data.data.repositories) || [];
          setRepositories(repositories);

          if (!repositories.length) { setErrorMessage('The user does not exist, try another one'); }
          setShowLoading(false);
        });
    } catch (error) {
      setErrorMessage('An error occurred, try again');
      setShowLoading(false);
    }
  }, [user, showLoading, errorMessage]);

  return (
    <div id="main-page">
      <h1>Go GitHub App</h1>

      <div className="search-area">
        <Input
          id="userInput"
          name="userInput"
          placeholder="Who's the user?"
          type="text" value={user}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <Button type="button" onClick={handleUserSearch}>search</Button>
      </div>

      {showLoading && <Spinner show={showLoading} />}

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {repositories && (
        <ul id="repository-list">
          {repositories.map((repository) => (
            <RepositoryCard
              repository={repository}
              key={repository.id}
            />)
          )}
        </ul>
      )}
    </div>
  );
}

export default MainPage;
