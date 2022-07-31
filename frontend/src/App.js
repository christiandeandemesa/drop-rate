import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

// import styles from './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path='/shop/*' element={<Shop />} />
			</Route>
		</Routes>
	);
}

export default App;
