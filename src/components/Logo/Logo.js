import React from 'react';
import styles from './Logo.module.css';
import logo from '../../img/logo.png';

const Logo = () => (
	<div className={styles.logo}>
	<div className={styles.develop}>Разработано в</div>
	<a href="https://webheroschool.ru/" target="__blank" rel="noopener noreferer">
	<img src={logo} alt="schoollogo"></img>
	</a>
	</div>
)

export default Logo;