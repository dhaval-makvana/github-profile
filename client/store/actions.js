import {
	FETCH_USER_BIO,
	FETCH_USER_REPOS,
	SEARCH_REPO,
	FILTER_BY_TYPE,
	FILTER_BY_LANGUAGE,
} from "./types";

const fetchBio = () => async (dispatch) => {
	const userDetails = await fetch(
		`https://api.github.com/users/supreetsingh247`
	).then((res) => res.json());

	return dispatch({ type: FETCH_USER_BIO, payload: userDetails });
};

const fetchRepos = () => async (dispatch) => {
	const repoDetails = await fetch(
		`https://api.github.com/users/supreetsingh247/repos`
	).then((res) => res.json());

	return dispatch({ type: FETCH_USER_REPOS, payload: repoDetails });
};

const searchRepo = (query) => async (dispatch) => {
	return dispatch({ type: SEARCH_REPO, payload: query });
};

const filterByType = (type) => async (dispatch) => {
	return dispatch({ type: FILTER_BY_TYPE, payload: type });
};

const filterByLanguage = (language) => async (dispatch) => {
	return dispatch({ type: FILTER_BY_LANGUAGE, payload: language });
};

export { fetchBio, fetchRepos, searchRepo, filterByType, filterByLanguage };
