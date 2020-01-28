import React from 'react';
import styles from './Home.module.scss';

const Home = props => {
	return (
		<div class={styles.wrapper}>
			<div class={styles.content}>
				<h1>Home page</h1>
				<p>welcome!</p>
			</div>
		</div>
	);
};

export default Home;
