import React from "react";
import style from "./RepositoryCard.module.css";

const RepositoryCard = ({ repository }) => {
  const { name, score, language, html_url, description } = repository || {};
  return (
    <div className={style.container}>
      <div className={style.container_item}>
        <div className={style.card}>
          <h3>
            <a href={html_url}>{name}</a>
          </h3>
          score: {score}
          <div className={style.repo_info}>
            <p>Description: {description}</p>
            {language && <small>Written in {language}</small>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
