import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom"
import { AuthContext } from "../Auth";
import app from "../base";

const UserHome = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome, {currentUser.displayName}</h1>
            <Link to='/'><button onClick={() => app.auth().signOut()}>Sign out</button></Link>
        </div>
    );
};

export default withRouter(UserHome);