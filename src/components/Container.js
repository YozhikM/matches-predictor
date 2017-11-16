/* @flow */

import React from 'react';
import SvgIcon from './SvgIcon/SvgIcon';
import { getTable, sortMatch, type Round, type Liga } from '../utils/getTable';
import { epl } from '../tables/epl';
import { laliga } from '../tables/laliga';
import { bundesliga } from '../tables/bundesliga';
import { seriaA } from '../tables/seriaA';
import { ligue1 } from '../tables/ligue1';
import { russianPL } from '../tables/russianPL';
import { championship } from '../tables/championship';
import { round12 } from '../rounds/laliga/round12';
import { EPLround12 } from '../rounds/epl/round12';
import { BundesligaRound12 } from '../rounds/bundesliga/round12';
import { SeriaARound13 } from '../rounds/seriaA/round13';
import { FranceRound13 } from '../rounds/ligue1/round13';
import { RussiaRound17 } from '../rounds/russianPL/round17';
import { shipRound17 } from '../rounds/championship/round17';
import s from './style.scss';

type Props = void;

type State = {
  show: 'SeriaA' | 'LaLiga' | 'EPL' | 'Bundesliga' | 'Ligue1' | 'Russia' | 'Ship'
};

class Container extends React.Component<Props, State> {
  componentWillMount() {
    this.setState({ show: 'EPL' });
  }

  renderTable = (round: Round, liga: Liga) => {
    getTable(round, liga);
    // $FlowFixMe
    const matches = round.sort(sortMatch);
    return (
      <div>
        <div className={s.buttonsContainer}>
          <button onClick={() => this.setState({ show: 'EPL' })}>EPL</button>
          <button onClick={() => this.setState({ show: 'LaLiga' })}>La Liga</button>
          <button onClick={() => this.setState({ show: 'Bundesliga' })}>Bundesliga</button>
          <button onClick={() => this.setState({ show: 'SeriaA' })}>Seria A</button>
          <button onClick={() => this.setState({ show: 'Ligue1' })}>Ligue 1</button>
          <button onClick={() => this.setState({ show: 'Russia' })}>Premier League</button>
          <button onClick={() => this.setState({ show: 'Ship' })}>Championship</button>
        </div>
        <table className={s.container}>
          {matches.map(match => {
            let icon;
            if (!match.rating) match.rating = 0;

            if (match.rating <= 5.5) {
              icon = <SvgIcon file="flame" />;
            }
            if (match.rating > 5.5 && match.rating <= 12.5) {
              icon = <SvgIcon file="sunny" />;
            }
            if (match.rating >= 22.5) {
              icon = <SvgIcon file="snowflake" />;
            }
            if (match.survive) {
              icon = <SvgIcon file="fangs" />;
            }

            return (
              <tr>
                <td>
                  <img src={match.homeLogo} alt="" />
                </td>
                <td>{match.home}</td>
                <td className={s.tdCenter}>{icon}</td>
                <td>{match.away}</td>
                <td>
                  <img src={match.awayLogo} alt="" />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  };

  render() {
    const { show } = this.state;
    const eplTable = this.renderTable(EPLround12, epl);
    const laligaTable = this.renderTable(round12, laliga);
    const bundesTable = this.renderTable(BundesligaRound12, bundesliga);
    const seriaATable = this.renderTable(SeriaARound13, seriaA);
    const ligue1Table = this.renderTable(FranceRound13, ligue1);
    const russianTable = this.renderTable(RussiaRound17, russianPL);
    const shipTable = this.renderTable(shipRound17, championship);

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

    if (show === 'Russia') {
      return russianTable;
    }

    if (show === 'Ship') {
      return shipTable;
    }
  }
}

export default Container;
