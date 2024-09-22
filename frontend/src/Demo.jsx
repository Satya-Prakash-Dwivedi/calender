import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


function Demo(){

    const {user, loginWithRedirect} = useAuth0()

    return(
        <div>
            <button onClick={(e) => {loginWithRedirect()}}>Login</button>
        </div>
    )
}

export default Demo