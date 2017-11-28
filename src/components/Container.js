/* @flow */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RoundTable from './RoundTable';
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
            <Link to="/epl">
              <Button country="England" league="EPL" />
            </Link>
            <Link to="/laliga">
              <Button country="Spain" league="La Liga" />
            </Link>
            <Link to="/bundesliga">
              <Button country="Germany" league="Bundesliga" />
            </Link>
            <Link to="/seria">
              <Button country="Italy" league="Seria A" />
            </Link>
            <Link to="/ligue1">
              <Button country="France" league="Ligue 1" />
            </Link>
            <Link to="/championship">
              <Button country="England" league="Championship" />
            </Link>
          </div>

          <Route path="/epl" component={RoundTable} />
          <Route path="/laliga" component={RoundTable} />
          <Route path="/bundesliga" component={RoundTable} />
          <Route path="/seria" component={RoundTable} />
          <Route path="/ligue1" component={RoundTable} />
          <Route path="/championship" component={RoundTable} />
        </div>
      </Router>
    );
  }
}

export default Container;
