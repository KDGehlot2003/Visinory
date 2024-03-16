import React from "react";
// import h_img from '/avatar-icon.svg';
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";


export default function Header() {
     return (
                <header className="head">
                        <div   className="header-divs" >
                        <div  className="h-divs1" />
                        <div  className="h-divs2" />
                        <div  className="h-divs3"  />
                    </div>
                    <div  className="header-divs-img" >
                    <img className="symbol" src="/images/symbol.jpg" alt="logo" />
                        <nav>

                    <NavLink to="/">
                      <h1  className="nav-h">
                                Home
                        </h1>
                     </NavLink>

                        <NavLink to="/Services">
                          <h2  className="nav-h">
                           Services
                        </h2>
                        </NavLink>


                        <NavLink to="/blog">
                     <h2  className="nav-h">
                           Blog
                        </h2>
                        </NavLink>

                        <NavLink to="/moderntech">
                            <h2  className="nav-h">
                                Modern Tech
                            </h2>
                        </NavLink>

                     <NavLink to="/about">
                       <h2  className="nav-h">
                                About
                        </h2>
                     </NavLink>

                        <NavLink to="/login">
                        <RxAvatar className="ava"/>
                        </NavLink>
                        
                        </nav>
                    </div>
                </header>
        );
}