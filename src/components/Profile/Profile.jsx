import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={style.content}>
			<div>
				<img src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
			</div>
			<div>ava + description</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
