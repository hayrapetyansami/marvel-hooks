import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../../pages/MainPage"
import ComicsPage from "../../pages/ComicsPage";

// Page
import SingleComic from "../singleComic/SingleComic";

export default function App() {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route exact path="/comics/">
              <ComicsPage/>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}