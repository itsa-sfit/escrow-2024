import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {};
  const [error, setError] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const params = useParams();
  // console.log(params.auth);
  return (
    <div className="Login h-full flex flex-col justify-center items-center self-center hover:cursor-default">
      <h2 className="text-center text-3xl mb-2 text-gray-600 font-semibold">
        Welcome to <span className="text-red-400">Escrow 2024</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className={
          "bg-white p-3 m-2 shadow-md rounded max-w-80 w-1/3 min-w-64" +
          (error ? " shadow-red-600/20" : "")
        } // animate-shake is a custom animation defined in index.css
      >
        <label className="block text-gray-600 text-lg ml-2 mb-1">
          Username
        </label>
        <input
          className="block border-2 border-gray-400 p-1 rounded text-lg focus:border-yellow-400 w-full mb-3"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label className="block text-gray-600 text-lg ml-2 mb-1">
          Password
        </label>
        <input
          className="block border-2 border-gray-400 p-1 rounded text-lg focus:border-yellow-400 w-full mb-3"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="w-full font-semibold bg-red-500 p-1 text-white text-lg my-2 text-center text-gray-700 hover:bg-red-300  active:bg-yellow-500 active:text-white shadow active:shadow-none transition-colors rounded"
          type="submit"
        >
          Log me in!
        </button>
      </form>
      <p>
        Don't have a account?{" "}
        <Link to="/register" className="text-yellow-500 hover:text-yellow-600">
          Register
        </Link>
      </p>
      {error && (
        <p className="text-pink-700 font-medium text-md tracking-wide">
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
