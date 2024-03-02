import React from "react";
import { serverUrl } from "../setup";
import useUserContext from "../hooks/useUserContext";

const Login = () => {
  const [error, setError] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { dispatch } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (username && password) {
      try {
        // For Python Backend
        let data = new FormData();
        data.append("username", username);
        data.append("password", password);
        const response = await fetch(serverUrl + "/user/login", {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        const json = await response.json();
        console.log(json);
        if (!response.ok) {
          setError(json.detail);
        } else {
          dispatch({
            type: "LOGIN",
            payload: { token: json.access_token, start_time: json.start_time },
          });
          setUsername("");
          setPassword("");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }
  };

  return (
    <div className="Login h-full flex flex-col justify-center items-center self-center hover:cursor-default">
      <h2
        className="text-center text-3xl font mb-2 text-gray-600"
        style={{ textShadow: "0 0 10px #00000055" }}
      >
        <span className="escrow text-black text-5xl blink_me">ESCROW 2024</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className={
          "glass px-6 py-[20%] m-2 shadow-md rounded-[40px] w-[90%]" +
          (error ? " shadow-red-600/20" : "")
        } // animate-shake is a custom animation defined in index.css
      >
        <label className="block font-bold tracking-widest text-xl second-font text-shadow text-white mb-1">
          Username
        </label>
        <input
          className="block border-2 border-gray-400 p-1 rounded-xl text-lg focus:border-yellow-400 w-full mb-6"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label className="block font-bold text-xl tracking-widest second-font text-shadow text-white mb-1">
          Password
        </label>
        <input
          className="block border-2 border-gray-400 p-1 rounded-xl text-lg focus:border-yellow-400 w-full mb-3"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="w-full mt-4 font-semibold bg-black/40 p-1 text-white text-lg my-2 text-center text-gray-700 hover:bg-black/60  active:bg-black active:text-white shadow active:shadow-none transition-colors rounded"
          type="submit"
        >
          Log me in!
        </button>
      </form>
      {error && (
        <p className="text-pink-700 font-medium text-md tracking-wide">
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
