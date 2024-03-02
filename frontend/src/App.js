import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import BG from "./components/BG";
import useUserContext from "./hooks/useUserContext";
import TheEnd from "./components/TheEnd";

function App() {
  const { user } = useUserContext();
  return (
    <>
      <div className="App h-dvh desktop-hidden p-4 min-h-dvh w-full">
        <BG />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element=<TheEnd/>
            />
            {/* <Route path="/ajay" element={}/> */}
            {/* <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="mobile-hidden w-full h-screen items-center justify-center">
        <div>
          <span className="material-symbols-rounded">phone_iphone</span>
          <h1>This site is only accessable in mobile</h1>
        </div>
      </div>
    </>
  );
}

export default App;
