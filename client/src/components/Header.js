import React from 'react';
import { Link } from 'react-router-dom';
import { LOG_OUT } from '../store/actions';

import { useSelector, useDispatch } from 'react-redux';

export const Header = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({
            type: LOG_OUT
        })
    }

    return (
        <>
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li className="uk-active"><Link to="/">The Little Guy</Link></li>
                    <li className="uk-active"><Link to="/">Home</Link></li>
                    <li className="uk-parent">
                    {
                        state.user ? <a onClick={handleLogout}>Logout</a> :
                        <Link to="/login">Login</Link>
                    }
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}