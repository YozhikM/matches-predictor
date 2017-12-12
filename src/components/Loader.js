/* @flow */

import React from 'react';
import SvgIcon from './SvgIcon';
import s from './style.scss';

export default class Loader extends React.Component<void, void> {
  render() {
    return (
      <div>
        <SvgIcon file="loader" wh="48px" className={s.loader} />
      </div>
    );
  }
}
