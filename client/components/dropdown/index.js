import React, { useState } from "react";
import styles from "./index.module.scss";
import { uuid } from "uuidv4";

const Dropdown = (props) => {
	const { data, onSelect, label, objectKey } = props;
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
		onSelect(e.target.value);
	};

	return (
		<div className={styles.dropdownContainer}>
			<select
				// className={styles.dropdown}
				onChange={(e) => handleChange(e)}
				value={value}
			>
				<option value="" key={uuid()}>
					Select {label}
				</option>
				{data.map((item) => {
					return (
						<option value={item} key={uuid()}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Dropdown;
