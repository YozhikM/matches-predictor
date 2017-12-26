/* @flow */

import setLogo from './setLogo';

function getPlace(teamOne: number, teamTwo: number) {
  return (teamOne + teamTwo) / 2;
}

function getDiff(teamOne: number, teamTwo: number) {
  if (teamOne > teamTwo) {
    return teamOne - teamTwo;
  } else {
    return teamTwo - teamOne;
  }
}

function getResult(a, b, c = 0): number {
  return ~~(a + b + c);
}

function sortMatch(matchA, matchB) {
  if (matchA.rating && matchB.rating) {
    return matchA.rating - matchB.rating;
  }
}

export function getTable(data: { fixtures: Array<Object>, standing: Array<Object> }) {
  const { fixtures: round, standing } = data;
  for (let i = 0; i < round.length; i++) {
    let home = round[i].homeTeamName;
    let away = round[i].awayTeamName;

    let awayPlace = 0;
    let homePlace = 0;
    let homePoints = 0;
    let awayPoints = 0;
    setLogo(standing);
    for (let j = 0; j < standing.length; j++) {
      if (standing[j].teamName === home) {
        homePlace = standing[j].position;
        homePoints = standing[j].points;
        round[i].homeLogo = standing[j].crestURI;
      }
      if (standing[j].teamName === away) {
        awayPlace = standing[j].position;
        awayPoints = standing[j].points;
        round[i].awayLogo = standing[j].crestURI;
      }
    }
    let place = getPlace(homePlace, awayPlace);
    let diffInPlace = getDiff(homePlace, awayPlace);
    let diffInPoints: number;
    const bottomOfTable = round.length * 1.5;
    const topOfTable = round.length;

    if (homePoints > awayPoints) {
      diffInPoints = homePoints - awayPoints;
      if (homePlace >= bottomOfTable && awayPlace >= bottomOfTable && diffInPoints <= 3) {
        round[i].survive = true;
      }
      if (homePlace <= topOfTable || awayPlace <= topOfTable) {
        round[i].rating = getResult(place, diffInPlace, -6);
      } else {
        round[i].rating = getResult(place, diffInPlace);
      }
    } else {
      diffInPoints = awayPoints - homePoints;
      if (homePlace >= bottomOfTable && awayPlace >= bottomOfTable && diffInPoints <= 3) {
        round[i].survive = true;
      }
      if (homePlace <= topOfTable || awayPlace <= topOfTable) {
        round[i].rating = getResult(place, diffInPlace, -6);
      } else {
        round[i].rating = getResult(place, diffInPlace);
      }
    }
    round[i].diffInPoints = diffInPoints;
    round[i].diffInPlace = diffInPlace;
    round[i].homePlace = homePlace;
    round[i].awayPlace = awayPlace;
    round[i].topOfTable = topOfTable;
    if (round[i].rating <= 1) {
      round[i].rating = 1;
    }
  }
  // $FlowFixMe
  return round.sort(sortMatch);
}
