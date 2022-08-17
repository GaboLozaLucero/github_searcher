import React from "react";
import style from "./UserCard.module.css";

const UserCard = ({ user }) => {
  const { avatar_url, login, score } = user || {};
  return (
    <div className={style.container}>
      <div className={style.container_item}>
        <div className={style.card}>
          <div className={style.image}>
            <img src={avatar_url} alt={login} />
          </div>
          <div className={style.user_info}>
            <h3>{login}</h3>
            <div className={style.info_container}>
              <h5>General score: {score}
              <a href={`https://github.com/${login}`}>View profile</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
