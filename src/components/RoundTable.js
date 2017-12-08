/* @flow */

import React from 'react';
import { getTable, type Round, type Liga } from '../utils/getTable';
import { epl } from '../tables/epl';
import { laliga } from '../tables/laliga';
import { bundesliga } from '../tables/bundesliga';
import { seriaA } from '../tables/seriaA';
import { ligue1 } from '../tables/ligue1';
import { championship } from '../tables/championship';
import { round15 } from '../rounds/laliga/round15';
import { EPLround16 } from '../rounds/epl/round16';
import { BundesligaRound15 } from '../rounds/bundesliga/round15';
import { SeriaARound16 } from '../rounds/seriaA/round16';
import { FranceRound17 } from '../rounds/ligue1/round17';
import { shipRound21 } from '../rounds/championship/round21';
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
      matches = getTable(SeriaARound16, seriaA, { soft });
    }

    if (route.url === '/england/epl') {
      matches = getTable(EPLround16, epl, { soft });
    }

    if (route.url === '/spain/laliga') {
      matches = getTable(round15, laliga, { soft });
    }

    if (route.url === '/germany/bundesliga') {
      matches = getTable(BundesligaRound15, bundesliga, { soft });
    }

    if (route.url === '/france/ligue1') {
      matches = getTable(FranceRound17, ligue1, { soft });
    }

    if (route.url === '/england/championship') {
      matches = getTable(shipRound21, championship, { soft });
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
