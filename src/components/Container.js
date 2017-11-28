/* @flow */

import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import RoundTable from './RoundTable';
import Hello from './Hello';
import Button from './Button';
import s from './style.scss';

type Props = void;

type State = void;

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

            <Link to="/russia/premier">
              <Button country="Russia" league="Premier League" />
            </Link>
          </div>

          <Route exact path="/" component={Hello} />
          <Route path="/england/epl" component={RoundTable} />
          <Route path="/spain/laliga" component={RoundTable} />
          <Route path="/germany/bundesliga" component={RoundTable} />
          <Route path="/italy/seria" component={RoundTable} />
          <Route path="/france/ligue1" component={RoundTable} />
          <Route path="/england/championship" component={RoundTable} />
          <Route path="/russia/premier" component={RoundTable} />
        </div>
      </Router>
    );
  }
}

export default Container;
