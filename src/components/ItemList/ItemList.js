import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ items, onClickDone, onClickDelete, sort, sortValue }) => (
	<ul className={styles.list}>
{sort.map((item) => (<li key={item.id}>
	<Item 
	value={item.value}
	isDone={item.isDone}
	id={item.id}
	onClickDone={onClickDone}
	onClickDelete={onClickDelete}
	/>
	 </li>))}
	</ul>);

ItemList.defaultProps = {
	value: 'Все дела выполнены',
	isDone: false
};



export default ItemList;