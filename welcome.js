import React from 'react';
import {BrowserRouter as Router , Link , Route} from "react-router-dom";
import LoginForm from "./LoginForm";

const Welcome = () => {
    return(
        <div>
            <h1>Welcome !!!</h1>
            <Router>     
           <Link to = "/Login">Logout </Link>
           <Route path ="/Login" component = {LoginForm} />
           </Router>
        </div>
    )
}
export default Welcome