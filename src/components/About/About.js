import React from 'react';
import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from "@octokit/rest";
import Prelouder from '../Prelouder/Prelouder';
import GitHubIcon from '@material-ui/icons/GitHub';


const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		username: 'VladimirovaEV',
		fetchFailure: false,
		userInfo: [],
		avatarUrl: [],
		bio: [],
		html_url: [],
		firstRepo: 0,
		lastRepo: 2
	}
	lastPage = () => {
		this.setState({
			firstRepo: this.state.firstRepo - 2,
			lastRepo: this.state.lastRepo - 2,
		});
	};

	nextPage = () => {
		this.setState({
			firstRepo: this.state.firstRepo + 2,
			lastRepo: this.state.lastRepo + 2,
		});
	};

	componentDidMount() {
		octokit.repos.listForUser ({
			username: this.state.username,
		}).then (({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false,
				fetchFailure: false
			});
			}).catch(() => {
				this.setState ({
					isLoading: false,
					isError: true,
					TextErr:'Что-то пошло не так...'
				});
			})
			octokit.users.getByUsername({
			username: this.state.username,
		}).then(response => {
			this.setState({
				avatarUrl: response.data.avatar_url,
				name: response.data.name,
				bio: response.data.bio,
				html_url: response.data.html_url
			});
		})
			.catch(() => {
				this.setState({
					isLoading: false,
					isError: true,
				});
			});

	}
	render() {
		const { isLoading, repoList, fetchFailure, isError, TextErr, name, avatarUrl, bio, html_url, firstRepo, lastRepo } = this.state;
		const repoListPage = repoList.slice(firstRepo,lastRepo);
		return (
			<div>
			{isLoading ? <Prelouder /> : <div>
				{isError ? <div>{TextErr}</div> : <div>
				<CardContent>
			<h1 className={styles.title}>{ isLoading ? <Prelouder /> : name }</h1>
			<div className={styles.about}>
			<img className={styles.img} src={ avatarUrl } alt="Аватар" /> 
			<div className={styles.bio}> { bio } </div>
			<div className={styles.github}>
			<GitHubIcon />
			</div>
			<a href={ html_url } className={styles.url} target="_blank" rel="noreferrer">{ html_url }</a>
			</div>
			<div>
			<h2 className={styles.repo}>{ isLoading ? <Prelouder /> : 'Мои репозитории на GitHub'}</h2>
			{!fetchFailure && <div>{TextErr}</div>}
			{!isLoading && <ul className={styles.ul}>
			{repoListPage.map(repo => (<li className={styles.li} key={repo.name}>
					<a href={repo.html_url} className={styles.link} target="_blank" rel="noreferrer">{repo.name}</a> 
			<p className={styles.text}>{repo.description}</p>
				</li>))}
				</ul>}
				</div>
				<div className={styles.pagination}>
                    <button className={styles.pagination_button}
                        onClick={this.lastPage}
                        disabled={firstRepo < 1}
                    >
                    Back
                    </button>
                    <button className={styles.pagination_button}
                        onClick={this.nextPage}
                        disabled={repoList.length < lastRepo}
                    >
                    Forward
                    </button>
                </div>
			</CardContent>
				</div>
				}
				</div>
				}
			</div>)
		}
}

export default About; 