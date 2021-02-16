import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import 'fontsource-roboto';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';

const App = () => 
(<Router>
	<div className={styles.app_wrap}>
	<Card className={styles.sidebar}>
	<MenuList className={styles.menu}>
	<div className={styles.button}>
	<Card>
	<Link to='/' className = {styles.link}><MenuItem>Обо мне</MenuItem></Link>
	</Card>
	</div>
	<div className={styles.button}>
	<Card>
	<Link to='/todo' className = {styles.link}><MenuItem>Дела</MenuItem></Link>
	</Card>
	</div>
	<div className={styles.button}>
	<Card>
	<Link to='/contacts' className = {styles.link}><MenuItem>Контакты</MenuItem></Link>
	</Card>
	<Logo />
	</div>
	</MenuList>
	</Card>
	<Card className={styles.content}>
	<Route path='/' exact component={About} />
	<Route path='/todo' component={Todo} />
	<Route path='/contacts' component={Contacts} />
	</Card>
	</div>
	</Router>);


	export default App;