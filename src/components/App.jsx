import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import FilmPage from './FilmPage/FilmPage';
import SearchPage from './SearchPage/SearchPage';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/film" history={history} component={FilmPage} />
                <Route path="*" history={history} component={SearchPage} />
            </Switch>
        );
    }
}