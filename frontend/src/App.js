import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import BG from "./components/BG";
import Logout from "./components/Logout";
import useUserContext from "./hooks/useUserContext";

function App() {
  const { user, dispatch } = useUserContext();
  return (
    <>
      <div className="App h-dvh desktop-hidden p-4 min-h-dvh w-full">
        <BG />
        <BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={user ? <Home /> : <Navigate to="/login" />}
    />
    <Route
      path="/login"
      element={user ? <Navigate to="/" /> : <Login />}
    />
    <Route 
      path="/admin/logout"
      element={<Logout dispatch={dispatch}/>}
    />
  </Routes>
</BrowserRouter>

      </div>
      <div className="mobile-hidden w-full h-screen flex items-center justify-center">
        <div>
          <span className="material-symbols-rounded">phone_iphone</span>
          <h1>This site is only accessable in mobile</h1>
        </div>
      </div>
    </>
  );
}

export default App;
