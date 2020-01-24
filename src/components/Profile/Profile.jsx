import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div className={style.content}>
			<ProfileInfo />
			<MyPosts posts={props.posts}/>
		</div>
	);
};

export default Profile;
