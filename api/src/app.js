const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get('/starred/:user', (request, response) => {
  const { user } = request.params;

  axios.get(`https://api.github.com/users/${user}/starred`)
    .then(res => {
      const { data = [] } = res;
      const sanitizedRepositories = sanitizeRepositories(data);

      if (!repositories.length) {
        repositories.push(...sanitizedRepositories);

        return response.json({
          status: 'ok',
          size: repositories.length,
          repositories
        });
      }
      
      return response.json({
        status: 'ok',
        size: sanitizedRepositories.length,
        repositories: sanitizedRepositories
      });
    })
    .catch(error => {
      return response.status(400).json({ error });
    });
});

function sanitizeRepositories (data) {
  return data.map(repository => {
    const {
      description,
      id,
      html_url: url,
      name,
      owner = {},
      stargazers_count: likes
    } = repository;

    return {
      description,
      id,
      likes,
      name,
      owner: owner.login,
      url
    };
  })
}

module.exports = app;
