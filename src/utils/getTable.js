/* @flow */

type Match = {
  home: string,
  away: string,
  rating?: number,
  homeLogo?: ?string,
  awayLogo?: ?string,
  survive?: ?boolean,
  date?: string,
  time?: string
};

export type Round = Array<Match>;

export type Liga = {
  [key: string]: {
    place: number,
    points: number,
    logo?: string
  }
};

function getPlace(teamOne, teamTwo) {
  return (teamOne + teamTwo) / 2;
}

function getDiff(teamOne, teamTwo) {
  if (teamOne > teamTwo) {
    return teamOne - teamTwo;
  } else {
    return teamTwo - teamOne;
  }
}

function result(a, b, c = 0) {
  return ~~(a + b + c);
}

export function getTable(round: Round, liga: Liga) {
  for (let i = 0; i < round.length; i++) {
    let home = round[i].home;
    let away = round[i].away;
    let homePlace = liga[home].place;
    let awayPlace = liga[away].place;
    let homePoints = liga[home].points + liga[home].past;
    let awayPoints = liga[away].points + liga[away].past;
    let place = getPlace(homePlace, awayPlace);
    let diffInPlace = getDiff(homePlace, awayPlace);
    round[i].homeLogo = liga[home].logo;
    round[i].awayLogo = liga[away].logo;
    let diffInPoints;
	const bottomOfTable = ~~(round.length * 1.5);
	const topOfTable = ~~(round.length / 1.75);

    if (homePoints > awayPoints) {
      diffInPoints = liga[home].points - liga[away].points;
      if (homePlace >= bottomOfTable && awayPlace >= bottomOfTable && diffInPoints <= 6) {
        round[i].survive = true;
      }
      if (homePlace <= topOfTable || awayPlace <= topOfTable) {
        round[i].rating = result(place, diffInPlace) - 4.5;
      } else {
        round[i].rating = result(place, diffInPlace);
      }
    } else {
      diffInPoints = liga[away].points - liga[home].points;
      if (homePlace >= bottomOfTable && awayPlace >= bottomOfTable && diffInPoints <= 6) {
        round[i].survive = true;
      }
      if (homePlace <= topOfTable || awayPlace <= topOfTable) {
        round[i].rating = result(place, diffInPlace) - 4.5;
      } else {
        round[i].rating = result(place, diffInPlace);
      }
    }
    if (round[i].rating <= 1) {
      round[i].rating = 1;
    }
  }
}

export function sortMatch(matchA: Match, matchB: Match) {
  if (matchA.rating && matchB.rating) {
    return matchA.rating - matchB.rating;
  };
}
