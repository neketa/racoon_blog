import * as React from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import MovieList from '../MovieList';
import Footer from '../Footer';

export default class App extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="header-bg">
                <Header />
            </div>
            <Navigation />
            <main className="content">
                <MovieList />
            </main>
            <Footer />
        </div>
        );
    }
}