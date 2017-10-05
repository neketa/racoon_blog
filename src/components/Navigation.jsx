import * as React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="nav">
                <span className="nav__text">movies found</span>
                <div className="sort-menu">
                    <span className="nav__text">sort by</span>
                    <button className="sort-menu__btn">release date</button>
                    <button className="sort-menu__btn sort-menu__btn--active">raiting</button>
                </div>
            </nav>
        )
    }
}