import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import Category from '../../components/Category/Category';

import styles from './Shop.module.scss';

function Shop() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}

export default Shop;
