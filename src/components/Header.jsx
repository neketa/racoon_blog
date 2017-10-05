import * as React from 'react';
import Film from './Film';
import Search from './Search';


export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="main-title">netflixroulette</h1>
                <Search/>
            </header>
        )
    }
}