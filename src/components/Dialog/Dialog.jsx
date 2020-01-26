import React from 'react';
import styles from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialog = props => {
	
	let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> );
	let messagesElements = props.state.messagesData.map( message => <Message message={message.message} key={message.id} />);

	// --------------

	let newMessageLink = React.createRef();
	let previewMessage = React.createRef();


	let readNewMessage = () => {
		let text = newMessageLink.current.value;
		previewMessage.current.innerText = 	text;	
	}


	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{ dialogsElements }
			</div>

			<div className={styles.messages}>
				{ messagesElements }
				
				{/* ------- */}
				<div className={styles.newMessage}>
					<textarea ref={ newMessageLink } placeholder="add new message..."></textarea>
					<button onClick={ readNewMessage }>Add message</button>
					<span className="previewMessage" ref={ previewMessage }></span>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
