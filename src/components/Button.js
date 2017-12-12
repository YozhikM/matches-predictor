/* @flow */

import React from 'react';

type Props = {
  country: string,
  league: string
};

class Button extends React.Component<Props, void> {
  shouldComponentUpdate(nextProps: Props) {
    if (nextProps === this.props) {
      return false;
    }
    return true;
  }

  render() {
    const { country, league } = this.props;
    return (
      <button>
        {country} <br /> {league}
      </button>
    );
  }
}

export default Button;
