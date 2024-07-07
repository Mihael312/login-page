export const Login = ({ handleClick, handleLoggedUser, loggedUser, handleLogin }) => {
  return (
    <div className="App flex justify-center items-center w-full h-full text-white font-semibold bg-gray-500">
      <div className="flex justify-center items-center flex-col bg-gray-700 h-80 w-80 gap-3 rounded-2xl">
        <h1 className="text-4xl">Login</h1>
        <form onSubmit={handleLogin} className="flex justify-center items-center flex-col gap-3">
          <input
            onChange={handleLoggedUser}
            value={loggedUser.username}
            name="username"
            placeholder="username"
            className="text-center h-10 text-gray-900 rounded-2xl"
          />
          <input
            onChange={handleLoggedUser}
            value={loggedUser.password}
            name="password"
            type="password"
            placeholder="password"
            className="text-center h-10 text-gray-900 rounded-2xl"
          />
          <button
            type="submit"
            className="bg-gray-200 px-10 h-10 text-gray-900 rounded-2xl"
          >
            Login
          </button>
        </form>

        <p className="mt-5">Don't have an account?</p>
        <button
          onClick={handleClick}
          type="button"
          className="bg-gray-400 px-10 h-8 text-gray-900 rounded-2xl"
        >
          register
        </button>
      </div>
    </div>
  );
};
