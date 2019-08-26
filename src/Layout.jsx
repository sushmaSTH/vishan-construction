import React, { Component } from 'react';

import Nav from './components/Nav'
import Footer from './components/Footer'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Nav />
                {this.props.children}
                <Footer />
            </>
        )
    }
}