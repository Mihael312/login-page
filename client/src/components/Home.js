import { Link } from "react-router-dom"

export const Home = ({isLogged, handleLogout, loggedUser}) => {
    return(
        <div className="flex w-screen justify-between items-center h-20 px-5 text-white font-semibold bg-gray-500">
             <h1 className="text-4xl"><Link to="/">Welcome {isLogged && loggedUser.username} </Link></h1> 
            {isLogged?
             <button onClick={handleLogout} className="text-xl bg-gray-700 rounded-xl p-2">Logout</button> : ""}
        </div>
    )
}