import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';

const App = () => (
	<div>
	<h1> План обучения на неделю </h1>
	<InputItem />
	<ItemList />
	<Footer />
	</div>);

	export default App;