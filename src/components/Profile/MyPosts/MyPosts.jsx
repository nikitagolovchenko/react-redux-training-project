import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = (props) => {
	console.log(props.posts);

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

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
