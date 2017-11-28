/* @flow */

import React from 'react';
import { getTable, sortMatch, type Round, type Liga } from '../utils/getTable';
import { epl } from '../tables/epl';
import { laliga } from '../tables/laliga';
import { bundesliga } from '../tables/bundesliga';
import { seriaA } from '../tables/seriaA';
import { ligue1 } from '../tables/ligue1';
import { championship } from '../tables/championship';
import { round14 } from '../rounds/laliga/round14';
import { EPLround14 } from '../rounds/epl/round14';
import { BundesligaRound14 } from '../rounds/bundesliga/round14';
import { SeriaARound15 } from '../rounds/seriaA/round15';
import { FranceRound15 } from '../rounds/ligue1/round15';
import { shipRound20 } from '../rounds/championship/round20';
import SvgIcon from './SvgIcon/SvgIcon';
import s from './style.scss';

type Props = {
  round: Round,
  liga: Liga,
  match: Object
};

class RoundTable extends React.Component<Props, void> {
  render() {
    const { match: route } = this.props;
    let matches;

    if (route.url === '/seria') {
      getTable(SeriaARound15, seriaA);
      matches = SeriaARound15.sort(sortMatch);
    }

    if (route.url === '/epl') {
      getTable(EPLround14, epl);
      matches = EPLround14.sort(sortMatch);
    }

    if (route.url === '/laliga') {
      getTable(round14, laliga);
      matches = round14.sort(sortMatch);
    }

    if (route.url === '/bundesliga') {
      getTable(BundesligaRound14, bundesliga);
      matches = BundesligaRound14.sort(sortMatch);
    }

    if (route.url === '/ligue1') {
      getTable(FranceRound15, ligue1);
      matches = FranceRound15.sort(sortMatch);
    }

    if (route.url === '/championship') {
      getTable(shipRound20, championship);
      matches = shipRound20.sort(sortMatch);
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
