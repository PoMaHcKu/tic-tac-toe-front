import {A} from "hookrouter";
import * as React from "react";
import {useContext} from "react";
import {Context} from "../reducers/store";
import {signOutAC} from "../constants/actionCreators";
import {setToken} from "../dao/request";

function Nav() {

    const [state, dispatch] = useContext(Context)

    console.log(state.user)

    return !state.user.token ?
        <div className="nav">
            <div className="nav_item">
                <A href="/">GAMES</A>
            </div>
            <div className="nav_item">
                <A href="/login">LOGIN</A>
            </div>
            <div className="nav_item">
                <A href="/registration">REGISTRATION</A>
            </div>
        </div>
        :
        <div className="nav">
            <div className="nav_item">
                <A href="/">GAMES</A>
            </div>
            <div className="nav_item">
                <A onClick={() => {
                    setToken(null)
                    dispatch(signOutAC())
                }} href="/">SIGN OUT</A>
            </div>
        </div>
}

export default Nav