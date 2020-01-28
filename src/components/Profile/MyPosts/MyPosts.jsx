import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

	

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;

		props.dispatch(updateNewPostTextActionCreator(text));
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
