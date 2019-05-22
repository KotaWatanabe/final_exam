import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../api/session';

export function NavBar(props){
    const { currentUser, onSignOut } = props;
    function handleSignout() {
        Session.destroy().then(() => {
          onSignOut();
        });
      }
    return(
        <nav className="NavBar">
            <NavLink exact to="/">Home Page</NavLink>
            <br/>
            <NavLink exact to="/auctions">Auction Page</NavLink>
            <br/>
            {currentUser ? (
                <>
                <span>{currentUser.first_name}</span>
                <span onClick={handleSignout}>Sign Out</span>
                </>
                ) : (
            <NavLink exact to="/sign_in">
            Sign In
            </NavLink>
            )}
        </nav>
    )
}
