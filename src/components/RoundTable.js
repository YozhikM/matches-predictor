/* @flow */

import React from 'react';
import { type Round } from '../utils/getTable';
import SvgIcon from './SvgIcon/SvgIcon';
import s from './style.scss';

type Props = {
  matches: Round
};

class RoundTable extends React.Component<Props, void> {
  render() {
    const { matches } = this.props;
    return (
      <div className={s.container}>
        {matches.map((match, i) => {
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
      </div>
    );
  }
}

export default RoundTable;
