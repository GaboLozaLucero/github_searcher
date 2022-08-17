import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import UserSearch from "./pages/userSearch/UserSearch";
import RepositorySearch from "./pages/repositorySearch/RepositorySearch";

function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/user_search">
          <UserSearch></UserSearch>
        </Route>
        <Route path="/repository_search">
          <RepositorySearch></RepositorySearch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

