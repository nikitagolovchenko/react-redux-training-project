import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = () => {
	
	let posts = [	
		{ id: 1, message: "Hello World!", likesCount: 5},
		{ id: 2, message: "It's my first project", likesCount: 12},
	];

	let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

	return (
		<div className={style.inner}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea placeholder="new post"></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={style.posts}>
				{ postsElements }
			</div>
		</div>
	);
};

export default MyPosts;
