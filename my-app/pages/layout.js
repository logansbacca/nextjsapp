import React from 'react';
import {Link} from 'react-router-dom'

function Layout () {
    return (
        <header>
        <div>React Meetups</div>
        <nav>
            <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/new'>NewMeetup</Link>
            </li>
            <li>
                <Link to='/favorites'>Favorites</Link>
            </li>
            </ul>
        </nav>
        </header>
    )
}


export default Layout;