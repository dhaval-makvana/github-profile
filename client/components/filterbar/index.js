import React, { useState } from "react";
import styles from "./index.module.scss";
import Dropdown from "../dropdown/index";

const FilterBar = (props) => {
	const { searchRepo, filterByType, filterByLanguage, languages } = props;
	const [search, setSearch] = useState("");
	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
		searchRepo(e.target.value);
	};
	return (
		<div className={styles.filterContainer}>
			<div className={styles.searchContainer}>
				<input
					name="search"
					value={search}
					placeholder="Search..."
					onChange={(e) => handleSearch(e)}
				/>
			</div>
			<div className={styles.dropdownContainer}>
				<Dropdown
					label="Language"
					onSelect={filterByLanguage}
					data={languages}
				/>
				<button className={styles.newButton}>New</button>
			</div>
		</div>
	);
};

export default FilterBar;
