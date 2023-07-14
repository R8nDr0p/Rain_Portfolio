import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Hero />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
