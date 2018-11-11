import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="menu-wrapper">
                    <div className="menu">
                        <ul className="left">
                            <li onMouseOver={() => { document.getElementById('md-menu').style.visibility = "hidden" }}><Link to="/" onClick={() => { window.scrollTo(0, 0); }} className="link brand" href="/">Big Hit Shop</Link></li>
                            <li className="link md"><span onMouseOver={() => { document.getElementById('md-menu').style.visibility = "visible" }}>MD</span>
                                <div className="relative">
                                    <ul id="md-menu" onMouseLeave={() => { document.getElementById('md-menu').style.visibility = "hidden" }} onClick={() => { document.getElementById('md-menu').style.visibility = "hidden" }}>
                                        <li><Link to={{ pathname: "/officialmd/", state: { category: "official_md" } }} onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">OFFICIAL MD</Link></li>
                                        <li><Link to={{ pathname: "/tourmd/", state: { category: "tour_md" } }} onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">TOUR MD</Link></li>
                                        <li><Link to={{ pathname: "/exhibition/", state: { category: "exhibition" } }} onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">EXHIBITION</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li onMouseOver={() => { document.getElementById('md-menu').style.visibility = "hidden" }}><Link to={{ pathname: "/albums/", state: { category: "albums" } }} onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">ALBUMS</Link></li>
                            <li onMouseOver={() => { document.getElementById('md-menu').style.visibility = "hidden" }}><Link to={{ pathname: "/dvd/", state: { category: "dvd" } }} onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">DVD</Link></li>
                            <li onMouseOver={() => { document.getElementById('md-menu').style.visibility = "hidden" }}><Link to={{ pathname: "/lovemyself/", state: { category: "love_myself" } }} onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">LOVE MYSELF</Link></li>
                        </ul>
                        <ul className="right">
                            <Link to="/login" onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">LOGIN</Link>
                            <Link to="/join" onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">JOIN</Link>
                            <Link to="/cart" onClick={() => { window.scrollTo(0, 0); }} className="link" href="/">CART(0)</Link>
                        </ul>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default AppNavbar;