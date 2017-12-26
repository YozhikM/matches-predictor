/* @flow */

import React from "react";
import s from "./style.scss";
import { isArray } from "util";

type Props = {
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
    const { match } = this.props;
    const {
      topOfTable,
      homePlace,
      homeTeamName,
      awayPlace,
      awayTeamName,
      diffInPlace,
      diffInPoints
    } = match;

    if (homePlace <= topOfTable || awayPlace <= topOfTable) {
      return `The match can be interesting, because the teams are located at the top of the standings. ${homeTeamName} is on the ${homePlace} place, and ${awayTeamName} is on the ${awayPlace} place. The difference between them:  ${diffInPoints} points and ${diffInPlace} places`;
    }
  };

  render() {
    return <div>{this.getDescription()}</div>;
  }
}
