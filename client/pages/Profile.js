import {
	fetchBio,
	fetchRepos,
	searchRepo,
	filterByType,
	filterByLanguage,
} from "../store/actions";
import { connect } from "react-redux";
import ProfilePage from "./profile/index";

function mapStateToProps(state) {
	console.log("state", state);
	const { bio, filterRepos, languages } = state.app;
	return {
		bio,
		filterRepos,
		languages
	};
}

export default connect(mapStateToProps, {
	fetchBio,
	fetchRepos,
	searchRepo,
	filterByType,
	filterByLanguage,
})(ProfilePage);
