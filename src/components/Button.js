/* @flow */

import React from 'react';

type Props = {
  show: string,
  country: string,
  league: string,
  onChange: Function
};

class Button extends React.Component<Props, void> {
  onClick = () => {
    const { show, onChange } = this.props;
    onChange(show);
  };

  render() {
    const { country, league } = this.props;
    return (
      <button onClick={this.onClick}>
        {country} <br /> {league}
      </button>
    );
  }
}

export default Button;
