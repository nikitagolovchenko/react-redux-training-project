import React from 'react';
import style from './Post.module.scss';

const Post = props => {
	
	return (
		<div className={style.item}>
			<div className={style.item_inner}>
				<img
					src="https://cdn.nlotv.com/i/image_1140x561/uploads/nlo/news/5e15a12b4a94c_thumb_1920_79588.jpeg"
					alt="image description"
				/>
				{props.message}
			</div>
			<div>
				<span className="value">Likes: {props.likesCount}</span>
			</div>
		</div>
	);
};

export default Post;
