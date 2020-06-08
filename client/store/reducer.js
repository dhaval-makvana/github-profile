import { combineReducers } from "redux";
import {
	FETCH_USER_BIO,
	FETCH_USER_REPOS,
	SEARCH_REPO,
	FILTER_BY_TYPE,
	FILTER_BY_LANGUAGE,
} from "./types";

// normalise state
const initialState = {
	bio: null,
	cacheRepos: [],
	filterRepos: null,
	languages: [],
};

const createLanguageList = (list) => {
	const output = {};
	list.map((item) => {
		const lang = item.language;
		if (lang !== null && !output[lang]) {
			output[lang] = true;
		}
	});
	console.log("lang list", Object.keys(output));
	return Object.keys(output);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_BIO:
			return {
				...state,
				bio: {
					...action.payload,
				},
			};

		case FETCH_USER_REPOS:
			return {
				...state,
				cacheRepos: [...action.payload],
				filterRepos: [...action.payload],
				languages: createLanguageList(action.payload)
			};

		case SEARCH_REPO:
			const query = action.payload;
			const searchResult = state.cacheRepos.filter((r) =>
				r.name.toLowerCase().includes(query.toLowerCase())
			);
			return {
				...state,
				filterRepos: searchResult,
			};

		case FILTER_BY_TYPE:
			const type = action.payload;
			// const typeFilterResult = state.cacheRepos.filter((r) => r.name )
			// will take some time to figure type
			return state;

		case FILTER_BY_LANGUAGE:
			const language = action.payload;
			console.log("language", language);
			let languageFilterResult = state.cacheRepos.filter(
				(r) => r.language === language
			);
			if (language === '') {
				languageFilterResult = [...state.cacheRepos]
			}
			return {
				...state,
				filterRepos: languageFilterResult,
			};

		default:
			return state;
	}
};

export default combineReducers({
	app: reducer,
});
