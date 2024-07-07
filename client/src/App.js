import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { LoggedIn } from "./components/LoggedIn";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Contacts } from "./components/Contacts";
import { registration } from "./api/registration";
import { login } from "./api/login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const [loggedUser, setLoggedUser] = useState({
    username: "",
    password: "",
  });
  const [registeredUser, setRegisteredUser] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handleLoginOrRegister = () => {
    setLoginOrRegister(!loginOrRegister);
  };

  const handleRegisteredUser = (e) => {
    const { name, value } = e.target;
    setRegisteredUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoggedUser = (e) => {
    const { name, value } = e.target;
    setLoggedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    if (registeredUser.password !== registeredUser.repeatPassword) {
      alert("Password is not the same");
      return;
    }
    const data = await registration(registeredUser);
    console.log(data);
    if (data.valid) {
      setIsLogged(true);
      localStorage.setItem("username", data.user.username)
      setLoggedUser((prevState) => ({
        ...prevState,
        username: registeredUser.username,
      }));
      console.log("logged in");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = await login(loggedUser);
    console.log(data);
    if (data.valid) {
      setIsLogged(true);
      localStorage.setItem("username", data.username)
      console.log("logged in");
    } else alert("Incorrect credentials");
  };

  const handleLogout = () => {
    setIsLogged(false);
    setLoggedUser({
      username:"",
      password:"",
    });
  };

  return (
    <div className="flex flex-col items-center w-100 h-[100vh]">
      <Home
        handleLogout={handleLogout}
        isLogged={isLogged}
        loggedUser={loggedUser}
      />
      {isLogged ? (
        <LoggedIn />
      ) : loginOrRegister ? (
        <Login
          className=""
          handleClick={handleLoginOrRegister}
          handleLoggedUser={handleLoggedUser}
          loggedUser={loggedUser}
          handleLogin={handleLogin}
        />
      ) : (
        <Register
          handleRegistration={handleRegistration}
          handleClick={handleLoginOrRegister}
          handleChange={handleRegisteredUser}
          registeredUser={registeredUser}
        />
      )}
      {isLogged ? (
        <Contacts isLogged={isLogged}/>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
