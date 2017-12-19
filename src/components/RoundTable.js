/* @flow */

import React from 'react';
import { getTable } from '../utils/getTable';
import { format } from 'date-fns';
import SvgIcon from './SvgIcon/SvgIcon';
import Loader from './Loader';
import s from './style.scss';

type Props = {
	match: Object
};

type State = {
	isLoading: boolean,
	standing: Array<Object>,
	fixtures: Array<Object>,
};

class RoundTable extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isLoading: true,
		}
	}
	componentDidMount() {
		const { match: route } = this.props;

		if (route.url === '/italy/seria') {
			this.getData(456);
		}

		if (route.url === '/england/epl') {
			this.getData(445);
		}

		if (route.url === '/spain/laliga') {
			this.getData(455);
		}

		if (route.url === '/germany/bundesliga') {
			this.getData(452);
		}

		if (route.url === '/france/ligue1') {
			this.getData(450);
		}

		if (route.url === '/england/championship') {
			this.getData(446);
		}
	}

	getData = (league: number) => {
		if (sessionStorage.getItem(`standing_${league}`)) {
			sessionStorage.object;
			const data = JSON.parse(sessionStorage[`standing_${league}`]);
			this.setState({ standing: data.standing }, () => {
				this.getFixtures(league, data.matchday);
			});
		} else {
		fetch(`http://api.football-data.org/v1/competitions/${league}/leagueTable`, {
			headers: { 'X-Auth-Token': 'f47b120c7d2440cf8422b83fab4901ab' }
		})
			.then(res => res.json())
			.then(data => {
				this.setState({ standing: data.standing }, () => {
					sessionStorage.setItem(`standing_${league}`, JSON.stringify(data));
					this.getFixtures(league, data.matchday);
				});
			})
			.catch(err => console.log(err.toString()))
		}
	};

	getFixtures = (league: number, matchday: number) => {
		if (sessionStorage.getItem(`fixtures_${league}_${matchday}`)) {
			sessionStorage.object;
			const fixtures = JSON.parse(sessionStorage[`fixtures_${league}_${matchday}`]);
			this.setState({ isLoading: false, fixtures });
		} else {
		fetch(`http://api.football-data.org/v1/competitions/${league}/fixtures?matchday=${matchday}`, {
			headers: { 'X-Auth-Token': 'f47b120c7d2440cf8422b83fab4901ab' }
		})
			.then(res => res.json())
			.then(data => {
			    sessionStorage.setItem(`fixtures_${league}_${matchday}`, JSON.stringify(data.fixtures));
				this.setState({ isLoading: false, fixtures: data.fixtures });
			})
			.catch(err => console.log(err.toString()))
		}
	};

	render() {
		const { isLoading, standing, fixtures } = this.state;

		if (isLoading && !standing && !fixtures) return (
			<Loader />
		);

		let matches;
		if (!isLoading && standing && fixtures) { 
			matches = getTable({ standing, fixtures });

			return (
				<div className={s.container}>
					{matches &&
						matches.map((match, i) => {
							const { rating, date, homeLogo, awayLogo, homeTeamName, awayTeamName, survive } = match;
							let icon;

							if (rating <= ~~(matches.length / 1.75)) {
								icon = <SvgIcon file="flame" />;
							}
							if (rating > ~~(matches.length / 1.75) && rating <= matches.length / 1.2) {
								icon = <SvgIcon file="sunny" />;
							}
							if (survive) {
								icon = <SvgIcon file="fangs" />;
							}

							return (
								<div key={i}>
									{date && (
										<div className={s.tr} style={{ justifyContent: 'center' }}>
												{format(date, 'DD.MM // H:mm')}
										</div>
									)}
									<div className={s.tr}>
										<div className={s.td && s.img}>
											<img src={homeLogo} alt="" />
										</div>
										<div className={s.tdLeft}>{homeTeamName}</div>
										<div className={s.tdCenter}>{icon}</div>
										<div className={s.tdRight}>{awayTeamName}</div>
										<div className={s.td && s.img}>
											<img src={awayLogo} alt="" />
										</div>
									</div>
								</div>
							);
						})}
				</div>
			);
		}

		return null;
	}
}

export default RoundTable;
