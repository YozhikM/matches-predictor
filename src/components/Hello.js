/* @flow */

import React from 'react';
import SvgIcon from './SvgIcon/SvgIcon';
import s from './style.scss';

export default function Hello() {
  return (
    <div className={s.container}>
      <div className={s.tr}>
        This application predicts the interestingness of the upcoming matches using its own
        algorithm.
      </div>

      <div className={s.tr}>
        <div className={s.td}>Hot matches are marked as follows:</div>
        <div className={s.td}>
          <SvgIcon file="flame" />
        </div>
      </div>

      <div className={s.tr}>
        <div className={s.td}>Good matches like this:</div>
        <div className={s.td}>
          <SvgIcon file="sunny" />
        </div>
      </div>

      <div className={s.tr}>
        <div className={s.td}>Matches between teams that are fighting for survival are:</div>
        <div className={s.td}>
          <SvgIcon file="fangs" />
        </div>
      </div>
    </div>
  );
}
