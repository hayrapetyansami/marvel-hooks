import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../../pages/MainPage"
import ComicsPage from "../../pages/ComicsPage";
import SingleComicPage from "../../pages/SingleComicPage";
import Page404 from "../../pages/404";


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics/" element={<ComicsPage/>}/>
            <Route path="/comics/:id" element={<SingleComicPage />}/>
            <Route path="*" element={<Page404/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}