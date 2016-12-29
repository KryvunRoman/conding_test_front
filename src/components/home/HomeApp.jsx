import React, {Component} from "react";

import Navbar from './../navbar/Navbar.jsx';

export default class HomeApp extends Component {
    render() {
        return (
        <section className="container">
            <Navbar/>
            <h2 className="page__content__empty">
                Home Page
            </h2>
        </section>

        );
    }
};