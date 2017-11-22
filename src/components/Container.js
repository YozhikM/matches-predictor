/* @flow */

import React from 'react';
import { getTable, sortMatch, type Round, type Liga } from '../utils/getTable';
import { epl } from '../tables/epl';
import { laliga } from '../tables/laliga';
import { bundesliga } from '../tables/bundesliga';
import { seriaA } from '../tables/seriaA';
import { ligue1 } from '../tables/ligue1';
import { championship } from '../tables/championship';
import { round13 } from '../rounds/laliga/round13';
import { EPLround13 } from '../rounds/epl/round13';
import { BundesligaRound13 } from '../rounds/bundesliga/round13';
import { SeriaARound14 } from '../rounds/seriaA/round14';
import { FranceRound14 } from '../rounds/ligue1/round14';
import { shipRound18 } from '../rounds/championship/round18';
import RoundTable from './RoundTable';
import Button from './Button';
import s from './style.scss';

type Props = void;

type State = {
  show: string
};

class Container extends React.Component<Props, State> {
  componentWillMount() {
    this.setState({ show: 'EPL' });
  }

  onChangeShow = (show: string) => {
    this.setState({ show });
  };

  renderTable = (round: Round, liga: Liga) => {
    getTable(round, liga);
    // $FlowFixMe
    const matches = round.sort(sortMatch);
    return (
      <div>
        <div className={s.buttonsContainer}>
          <Button
            show="EPL"
            country="EPL"
            league="EPL"
            onChange={this.onChangeShow} />
          <Button
            show="LaLiga"
            country="Spain"
            league="La Liga"
            onChange={this.onChangeShow} />
          <Button
            show="Bundesliga"
            country="Germany"
            league="Bundesliga"
            onChange={this.onChangeShow} />
          <Button
            show="SeriaA"
            country="Italy"
            league="Seria A"
            onChange={this.onChangeShow} />
          <Button
            show="Ligue1"
            country="France"
            league="Ligue 1"
            onChange={this.onChangeShow} />
          <Button
            show="Ship"
            country="England"
            league="Championship"
            onChange={this.onChangeShow} />
        </div>
        <RoundTable matches={matches} />
      </div>
    );
  };

  render() {
    const { show } = this.state;
    const eplTable = this.renderTable(EPLround13, epl);
    const laligaTable = this.renderTable(round13, laliga);
    const bundesTable = this.renderTable(BundesligaRound13, bundesliga);
    const seriaATable = this.renderTable(SeriaARound14, seriaA);
    const ligue1Table = this.renderTable(FranceRound14, ligue1);
    const shipTable = this.renderTable(shipRound18, championship);

    if (show === 'EPL') {
      return eplTable;
    }

    if (show === 'SeriaA') {
      return seriaATable;
    }

    if (show === 'Bundesliga') {
      return bundesTable;
    }

    if (show === 'LaLiga') {
      return laligaTable;
    }

    if (show === 'Ligue1') {
      return ligue1Table;
    }

    if (show === 'Ship') {
      return shipTable;
    }
  }
}

export default Container;
