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

class RoundTable extends React.Component<Props, void> {
  render() {
    const { match: route } = this.props;

    let matches;
    if (route.url === '/italy/seria') {
      matches = getTable(SeriaARound16, seriaA);
    }

    if (route.url === '/england/epl') {
      matches = getTable(EPLround16, epl);
    }

    if (route.url === '/spain/laliga') {
      matches = getTable(round15, laliga);
    }

    if (route.url === '/germany/bundesliga') {
      matches = getTable(BundesligaRound15, bundesliga);
    }

    if (route.url === '/france/ligue1') {
      matches = getTable(FranceRound17, ligue1);
    }

    if (route.url === '/england/championship') {
      matches = getTable(shipRound21, championship);
    }

    return (
      <div className={s.container}>
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
