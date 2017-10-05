import * as React from 'react';
import { Link } from 'react-router-dom'

export default class MovieList extends React.Component {
    render() {
        return (
            <ul className="movies-list">
                <li className="movie-item">
                     <Link to='/film' className="xxx"> 
                        <img className="movie-item__cover" src="http://cdn-2.nflximg.com/en_us/boxshots/ghd/70299043.jpg" alt="#" />
                        <div className="movie-item__info">
                            <h3 className="movie-item__title">This Anime</h3>
                            <span className="movie-item__year"> 2046</span>
                        </div>
                        <span className="movie-item__genre">anime</span>
                     </Link> 
                </li>
            </ul>
        )
    }
}
