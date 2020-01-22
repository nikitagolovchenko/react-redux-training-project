import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = () => {
	return (
		<div className={style.inner}>
			My posts
			<div>
				<textarea placeholder="new post"></textarea>
				<button>Add post</button>
			</div>
			<div className={style.posts}>
				<Post message="Hello World!" value="5" />
				<Post message="It's my first project" value="4"/>
			</div>
		</div>
	);
};

export default MyPosts;
