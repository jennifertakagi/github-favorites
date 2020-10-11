import React, { useState, useEffect } from "react";
import RepositoryCard from "../../components/RepositoryCard";

import "./styles.css";
import api from "../../services/api"

function MainPage() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/starred/jennifertakagi')
      .then(response => {
        const { data = {} } = response;
        setRepositories(data.repositories);
      })
  }, [])

  return (
    <div id="main-page">
      <h1>Go GitHub App</h1>
      <ul id="repository-list">
      {repositories.map(repository => {
        return <RepositoryCard repository={ repository } />
      })}
    </ul>
    </div>
  );
}

export default MainPage;
