/* @flow */

import React from 'react';

type Props = {
  length: number,
  match: {
    _links: Object,
    date: string,
    status: string,
    matchday: number,
    homeTeamName: string,
    awayTeamName: string,
    result: Object,
    odds: Object,
    homeLogo: string,
    awayLogo: string,
    rating: number,
    diffInPoints: number,
    diffInPlace: number,
    homePlace: number,
    awayPlace: number,
    topOfTable: number
  }
};

type State = {};

export default class Modal extends React.Component<Props, State> {
  getDescription = () => {
    const { match, length } = this.props;
    const {
      homePlace,
      homeTeamName,
      awayPlace,
      awayTeamName,
      diffInPlace,
      diffInPoints,
      rating,
      status
    } = match;

    console.log(status);

    if (rating <= length / 6) {
      return `The match ${status === 'FINISHED' ? 'was' : 'can get'} hot, because the teams are close to each other and close to the highest positions. ${homeTeamName} is on the ${homePlace} place, and ${awayTeamName} is on the ${awayPlace} place. The difference between them:  ${diffInPoints} points and ${diffInPlace} places`;
    }

    return `The match ${status === 'FINISHED' ? 'was' : 'can be'} interesting, because the teams are located at the top of the standings. ${homeTeamName} is on the ${homePlace} place, and ${awayTeamName} is on the ${awayPlace} place. The difference between them:  ${diffInPoints} points and ${diffInPlace} places`;
  };

  render() {
    return <div>{this.getDescription()}</div>;
  }
}
