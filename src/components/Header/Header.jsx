import React from 'react';
import style from './Header.module.scss';

const Header = () => {
	return (
		<header className={style.header}>
			<img src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
		</header>
	);
};

export default Header;