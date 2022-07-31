import React from 'react';

import data from '../../products-data';

import styles from './Category.module.scss';

function Category() {
	return (
		<div className={styles.shop}>
			<main>Consoles</main>
			{data.consoles.map(product => (
				<div key={product.name} className={styles.product}>
					<img src={product.image} alt={product.name} className={styles.image} />
					<h2 className={styles.name}>{product.name}</h2>
					<div className={styles.price_container}>
						<h3 className={styles.price}>${product.price}</h3>
						<button>Add to cart</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Category;
