import * as React from 'react';
import Footer from '../Footer';

export default class FilmPage extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="header-bg">
                        <h1 className="main-title">netflixroulette</h1>
                    </div>
                    <main className="content">
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }
}