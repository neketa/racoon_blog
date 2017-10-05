import * as React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <form className="search">
                <h2 className="search__title">find your movie</h2>
                <input className="search__field" name="filmsearch" />
                <div className="search-enter-icon">&#8617;</div>
                <div className="search__buttons">
                    <div className="search-filter">
                        <span className="search-filter__text">search by</span>
                        <button className="search-filter__btn search-filter__btn--active">title</button>
                        <button className="search-filter__btn">director</button>
                    </div>
                    <button className="search__submit-btn" type="submit">search</button>
                </div>
            </form>
        )
    }
}