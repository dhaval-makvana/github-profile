import React from "react";
import styles from "./index.module.scss";
import Bio from "../../components/bio/index";
import List from "../../components/list/index";
import FilterBar from "../../components/filterbar/index";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { bio, filterRepos, fetchBio, fetchRepos } = this.props;
		if (bio === null) {
			fetchBio();
		}
		if (filterRepos === null) {
			fetchRepos();
		}
	}

	render() {
		const {
			bio,
			filterRepos,
			searchRepo,
			filterByType,
			filterByLanguage,
			languages,
		} = this.props;
		if (bio === null || filterRepos === null) {
			return null;
		}
		return (
			<div className={styles.page}>
				<div className={styles.bio}>
					<Bio {...bio} />
				</div>
				<div className={styles.content}>
					<FilterBar
						searchRepo={searchRepo}
						filterByType={filterByType}
						filterByLanguage={filterByLanguage}
						languages={languages}
					/>
					<List list={filterRepos} />
				</div>
			</div>
		);
	}
}

export default Profile;
