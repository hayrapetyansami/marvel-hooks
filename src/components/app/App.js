import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../../pages/MainPage"
import ComicsPage from "../../pages/ComicsPage";

// Page
import SingleComic from "../singleComic/SingleComic";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage /> }/>
            <Route path="/comics/" element={<ComicsPage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}