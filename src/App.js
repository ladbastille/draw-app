import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Result from "./components/Result";
import "./normalize.css";
import "./app.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/result" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
