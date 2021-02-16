import React from 'react';
import style from './Footer.module.css';
import classnames from 'classnames';

const Footer = ({ items, renderIsDone, sorting, onClickSort }) => (
	<div className={style.footer}>
	<button
	className={classnames({
		[style.button]:true,
		[style.buttonAct]:sorting ==='Завершенные',
	})}
	onClick={() => onClickSort('Завершенные')}
	>
	<span className={style.did}>Завершенные - {renderIsDone(true)}</span>
	</button>
	<button
	className={classnames({
		[style.button]:true,
		[style.buttonAct]:sorting ==='Незавершенные',
	})}
	onClick={() => onClickSort('Незавершенные')}
	>
	<span className={style.notDid}>Незавершенные - {renderIsDone(false)}</span>
	</button>
	</div>

);
export default Footer;

