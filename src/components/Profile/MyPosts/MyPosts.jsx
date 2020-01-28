import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Posts';

const MyPosts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

	

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };

		props.dispatch(action);
	}


	return (
		<div className={style.inner}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={ newPostElement } onChange={ onPostChange } value={props.newPostText} placeholder="new post" />
				</div>
				<div>
					<button onClick={ addPost }>Add post</button>
				</div>
			</div>
			<div className={style.posts}>
				{ postsElements }
			</div>
		</div>
	);
};

export default MyPosts;
