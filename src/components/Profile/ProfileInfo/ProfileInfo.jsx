import React from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
			</div>
			<div className={styles.descriptionBlock}>ava + description</div>
		</div>
	);
};

export default ProfileInfo;
