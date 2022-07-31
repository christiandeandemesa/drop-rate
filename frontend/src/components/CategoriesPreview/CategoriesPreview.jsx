import React from 'react';

import styles from './CategoriesPreview.module.scss';

function CategoriesPreview() {
	return (
		<div className={styles.container}>
			<div className={styles.consoles_container}></div>
			<div className={styles.games_container}></div>
		</div>
	);
}

export default CategoriesPreview;
