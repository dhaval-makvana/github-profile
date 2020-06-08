import React from "react";
import styles from "./index.module.scss";

const ListItem = (props) => {
	const { name, description, language, updated_at } = props;

	return (
		<div className={styles.listItem}>
			<div className={styles.name}>{name}</div>
			<div className={styles.content}>
				<div className={styles.description}>{description}</div>
        <button className={styles.starButton}>Star</button>
			</div>
			<div className={styles.footer}>
				<div className={styles.language}>{language}</div>
				<div className={styles.updateDate}>{updated_at}</div>
			</div>
		</div>
	);
};

export default ListItem;
