import React from "react";

import "./styles.css";
import starIcon from "../../assets/icons/star.svg";

function RepositoryCard({ repository }) {
  return (
    <li
      className="repository-card"
      key={repository.id}
    >
      <div className="title">
        <p>{repository.name}</p>
        <div>
          <img src={starIcon} alt=""/>
          <span>{repository.likes}</span>
        </div> 
      </div>
      <p>Owner: {repository.owner}</p>
      <p>{repository.description}</p>
      <div className="check-repo-box">
        <a
          href={repository.url}
          className="go-repo-button"
        >
          Check this repo
        </a>
      </div>
    </li>
  );
}

export default RepositoryCard;
