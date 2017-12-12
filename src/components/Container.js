/* @flow */

import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Button from './Button';
import s from './style.scss';

type Props = void;

type State = void;

const LoadableHello = Loadable({
  loader: () => import('./Hello'),
  loading: 'Loading...',
});

const LoadablePage = Loadable({
  loader: () => import('./RoundTable'),
  loading: 'Loading...',
});

class Container extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <div>
          <div className={s.buttonsContainer}>
            <Link to="/england/epl">
              <Button country="England" league="EPL" />
            </Link>

            <Link to="/spain/laliga">
              <Button country="Spain" league="La Liga" />
            </Link>

            <Link to="/germany/bundesliga">
              <Button country="Germany" league="Bundesliga" />
            </Link>

            <Link to="/italy/seria">
              <Button country="Italy" league="Seria A" />
            </Link>

            <Link to="/france/ligue1">
              <Button country="France" league="Ligue 1" />
            </Link>

            <Link to="/england/championship">
              <Button country="England" league="Championship" />
            </Link>

          </div>

          <Route exact path="/" component={LoadableHello} />
          <Route path="/england/epl" component={LoadablePage} />
          <Route path="/spain/laliga" component={LoadablePage} />
          <Route path="/germany/bundesliga" component={LoadablePage} />
          <Route path="/italy/seria" component={LoadablePage} />
          <Route path="/france/ligue1" component={LoadablePage} />
          <Route path="/england/championship" component={LoadablePage} />
        </div>
      </Router>
    );
  }
}

export default Container;
