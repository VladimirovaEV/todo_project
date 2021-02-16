import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import style from './Todo.module.css';
import 'fontsource-roboto';
import classnames from 'classnames';
import emptylist from '../../img/empty-list.svg';

const Todo = () => {
	const initialState = {
		items: [],
		count: 0,
		isDone: false,
		sortTask: 'Список задач',
		id: 0,
	};

	const [items, setItems] = useState (initialState.items);
   const [count, setCount] = useState (initialState.count);
   const [sortTask, setSort] = useState (initialState.sortTask);

const onClickAdd = value => {
	if (value !== '') {
		setItems ([
		...items,
			{
				value,
				isDone: false,
				id: count + 1
			}]
		);
		setCount((count) => count + 1);
}
};

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = {...item};
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});
		setItems(newItemList);

	};
	const onClickDelete = id => {
		const newDelItemList = items.filter(item => item.id !== id);
		setItems(newDelItemList);
	};


const renderIsDone = (status) => {
	const newItems = items.filter(item => item.isDone === status);
	return newItems.length;
}

const onClickSort = (sorting) => setSort(sorting);
let sortingTask;
switch (sortTask) {
	case 'Завершенные':
	sortingTask = items.filter((item) => item.isDone);
	break;
	case 'Незавершенные':
	sortingTask = items.filter((item) => !item.isDone);
	break;
	case 'Список задач':
	sortingTask = items;
	break;
	default:
	sortingTask = items;
}

		return (
	<div className={style.wrap}>
	<div className={style.todo}>
	<button
	className={classnames({
		[style.buttonBig]:true,
		[style.buttonBigAct]:sortingTask ==='Список задач',
	})}
		onClick={() => onClickSort('Список задач')}
	>
	<span className={style.title}> Список задач - {items.length}</span>
	</button>
	</div>
	<InputItem items={items} onClickAdd={onClickAdd} />
	<div>
	{items.length === 0 ? (
		<div className={style.error}>
		<img src={emptylist} alt={"empty-list"} />
		<div className={style.error_message}>
                    Пока не добавлено ни одной задачи!
            </div>
            </div>
            ) : (
            <ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete}
	sort={sortingTask} sortValue={sortTask}/>
            )}
	</div>
	<Footer renderIsDone={renderIsDone} onClickSort={onClickSort} sorting={sortTask}/> 
	</div>);
};

	export default Todo;