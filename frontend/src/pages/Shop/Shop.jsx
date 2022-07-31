import React from 'react';
import {Link} from 'react-router-dom';

import data from '../../products-data';

import styles from './Shop.module.scss';

function Shop() {
	const categories = ['consoles', 'games'];

	return (
		<div className={styles.shop}>
			<main>Shop Page</main>
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

export default Shop;
