import {A} from "hookrouter";
import * as React from "react";
import {useContext} from "react";
import {Context} from "../reducers/store";
import {signOutAC} from "../constants/actionCreators";

function Nav() {

    const [state, setState] = useContext(Context)

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
                <A onClick={() => setState(signOutAC())} href="/">SIGN OUT</A>
            </div>
        </div>
}

export default Nav