import { Link } from "react-router-dom";
import style from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.title}>GitHub Searcher</div>
      </header>
      <div className={style.navContainer}>
        <ul>
          <li className={style.li}>
            <Link to="/user_search">GitHub Users</Link>
          </li>
          <li className={style.li}>
            <Link to="/repository_search">GitHub Repositories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
