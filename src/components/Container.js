/* @flow */

import React from 'react';
import SvgIcon from './SvgIcon/SvgIcon';
import { getTable, sortMatch, type Round, type Liga } from '../utils/getTable';
import { epl } from '../tables/epl';
import { laliga } from '../tables/laliga';
import { bundesliga } from '../tables/bundesliga';
import { seriaA } from '../tables/seriaA';
import { ligue1 } from '../tables/ligue1';
import { championship } from '../tables/championship';
import { round12 } from '../rounds/laliga/round12';
import { EPLround12 } from '../rounds/epl/round12';
import { BundesligaRound12 } from '../rounds/bundesliga/round12';
import { SeriaARound13 } from '../rounds/seriaA/round13';
import { FranceRound13 } from '../rounds/ligue1/round13';
import { shipRound17 } from '../rounds/championship/round17';
import s from './style.scss';

type Props = void;

type State = {
  show: 'SeriaA' | 'LaLiga' | 'EPL' | 'Bundesliga' | 'Ligue1' | 'Ship'
};

class Container extends React.Component<Props, State> {
  componentWillMount() {
    this.setState({ show: 'EPL' });
  }

  renderTable = (round: Round, liga: Liga) => {
    getTable(round, liga);
    const matches = round.sort(sortMatch);
    return (
      <div>
        <div className={s.buttonsContainer}>
          <button onClick={() => this.setState({ show: 'EPL' })}>England <br /> EPL</button>
          <button onClick={() => this.setState({ show: 'LaLiga' })}>Spain <br /> La Liga</button>
          <button onClick={() => this.setState({ show: 'Bundesliga' })}>Germany <br /> Bundesliga</button>
          <button onClick={() => this.setState({ show: 'SeriaA' })}>Italy <br /> Seria A</button>
          <button onClick={() => this.setState({ show: 'Ligue1' })}>France <br /> Ligue 1</button>
          <button onClick={() => this.setState({ show: 'Ship' })}>England <br /> Championship</button>
        </div>
        <table className={s.container}>
          {matches.map((match, i) => {
            let icon;
            if (!match.rating) match.rating = 0;

            if (match.rating <= ~~(matches.length / 2)) {
              icon = <SvgIcon file="flame" />;
            }
            if (match.rating > ~~(matches.length / 2) && match.rating <= ~~(matches.length / 0.75)) {
              icon = <SvgIcon file="sunny" />;
            }
            if (match.rating >= ~~(matches.length / 0.45)) {
              icon = <SvgIcon file="snowflake" />;
            }
            if (match.survive) {
              icon = <SvgIcon file="fangs" />;
            }

            return (
			<div key={i}>
			{match.time && match.day && <div className={s.tr}>
			    <td className={s.upDay}>{match.day}&nbsp;{'/'}</td>
                <td className={s.upTime}>{'/'}&nbsp;{match.time}</td>
            </div>}
              <div className={s.tr}>
                <div className={s.td && s.img}>
                  <img src={match.homeLogo} alt="" />
                </div>
                <div className={s.tdLeft}>{match.home}</div>
                <div className={s.tdCenter}>{icon}</div>
                <div className={s.tdRight}>{match.away}</div>
                <div className={s.td && s.img}>
                  <img src={match.awayLogo} alt="" />
                </div>
              </div>
			  </div>
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
    const ligue1Table = this.renderTable(FranceRound13, ligue1);;
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

    if (show === 'Ship') {
      return shipTable;
    }
  }
}

export default Container;
