/* @flow */

import React from 'react';
import { getTable, type Round, type Liga } from '../utils/getTable';
import { epl } from '../tables/epl';
import { laliga } from '../tables/laliga';
import { bundesliga } from '../tables/bundesliga';
import { seriaA } from '../tables/seriaA';
import { ligue1 } from '../tables/ligue1';
import { championship } from '../tables/championship';
import { russianPL } from '../tables/russianPL';
import { round14 } from '../rounds/laliga/round14';
import { EPLround15 } from '../rounds/epl/round15';
import { BundesligaRound14 } from '../rounds/bundesliga/round14';
import { SeriaARound15 } from '../rounds/seriaA/round15';
import { FranceRound16 } from '../rounds/ligue1/round16';
import { shipRound20 } from '../rounds/championship/round20';
import { RussiaRound19 } from '../rounds/russianPL/round19';
import SvgIcon from './SvgIcon/SvgIcon';
import s from './style.scss';

type Props = {|
  round: Round,
  liga: Liga,
  match: Object
|};

type State = {
  soft: boolean
};

class RoundTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      soft: true
    };
  }

  toggleMode = () => {
    this.setState({ soft: !this.state.soft });
  };

  render() {
    const { match: route } = this.props;
    const { soft } = this.state;

    let matches;
    if (route.url === '/italy/seria') {
      matches = getTable(SeriaARound15, seriaA, { soft });
    }

    if (route.url === '/england/epl') {
      matches = getTable(EPLround15, epl, { soft });
    }

    if (route.url === '/spain/laliga') {
      matches = getTable(round14, laliga, { soft });
    }

    if (route.url === '/germany/bundesliga') {
      matches = getTable(BundesligaRound14, bundesliga, { soft });
    }

    if (route.url === '/france/ligue1') {
      matches = getTable(FranceRound16, ligue1, { soft });
    }

    if (route.url === '/england/championship') {
      matches = getTable(shipRound20, championship, { soft });
    }

    if (route.url === '/russia/premier') {
      matches = getTable(RussiaRound19, russianPL, { soft });
    }

    return (
      <div className={s.container}>
        <div onClick={this.toggleMode}>
          <SvgIcon file="star" style={{ fill: !soft ? 'yellow' : null, cursor: 'pointer' }} />
        </div>

        {matches &&
          matches.map((match, i) => {
            let icon;
            if (!match.rating) match.rating = 0;

            if (match.rating <= ~~(matches.length / 1.75)) {
              icon = <SvgIcon file="flame" />;
            }
            if (match.rating > ~~(matches.length / 1.75) && match.rating <= matches.length / 1.2) {
              icon = <SvgIcon file="sunny" />;
            }
            if (match.survive) {
              icon = <SvgIcon file="fangs" />;
            }

            return (
              <div key={i}>
                {match.time &&
                  match.day && (
                    <div className={s.tr}>
                      <div className={s.upDay}>
                        {match.day}&nbsp;{'/'}
                      </div>
                      <div className={s.upTime}>
                        {'/'}&nbsp;{match.time}
                      </div>
                    </div>
                  )}
                <div className={s.tr}>
                  <div className={s.td && s.img}>
                    <img src={match.homeLogo || ''} alt="" />
                  </div>
                  <div className={s.tdLeft}>{match.home}</div>
                  <div className={s.tdCenter}>{icon}</div>
                  <div className={s.tdRight}>{match.away}</div>
                  <div className={s.td && s.img}>
                    <img src={match.awayLogo || ''} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default RoundTable;
