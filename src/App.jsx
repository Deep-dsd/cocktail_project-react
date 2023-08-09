import { BrowserRouter, Route, Routes } from "react-router-dom";

import SharedComponent from "./components/SharedComponent";
import SingleCocktail from "./pages/SingleCocktail";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedComponent />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Error />} />
          <Route path="cocktail/:cocktailId" element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
