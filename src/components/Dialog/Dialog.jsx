import React from 'react';
import styles from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialog = props => {
	
	let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> );
	let messagesElements = props.messagesData.map( message => <Message message={message.message} key={message.id} />);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{ dialogsElements }
			</div>

			<div className={styles.messages}>
				{ messagesElements }
			</div>
		</div>
	);
};

export default Dialog;
