import React, {Component} from 'react';

import { Router, Route, Link, IndexLink, IndexRoute, browserHistory } from 'react-router';

import './Navbar.scss';

const Navbar = () => (
    <div className="page__navbar">
        <div className="logo">
            <Link className="logo__link" to="/">Finpal</Link>
        </div>
        <nav className="nav">
            <div className="nav__block">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Overview</a>
                    </li>
                    <li className="nav__item">
                        <Link to="/transactions" className="nav__link">Transactions (3)</Link>
                    </li>
                </ul>
            </div>
            <div className="nav__block">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Transfers (2)</a>
                    </li>
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Invoices (1)</a>
                    </li>
                </ul>
            </div>
            <div className="nav__block">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Manage cards</a>
                    </li>
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Manage accounts</a>
                    </li>
                </ul>
            </div>
            <div className="nav__block">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Team</a>
                    </li>
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Integrations</a>
                    </li>
                    <li className="nav__item">
                        <a href="javascript:void(0)" className="nav__link">Settings</a>
                    </li>
                </ul>
            </div>
            <div className="btn-block">
                <button className="btn btn__blue">upgrate account</button>
            </div>
        </nav>

    </div>
);

export default Navbar;