import React from 'react';
import styles from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={styles.active}>
				{props.name}
			</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={styles.message}>{props.message}</div>
	)
}

const Dialog = props => {
	let dialogsData = [
		{ id: 1, name: "Nikita" },
		{ id: 2, name: "Oleg" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Sasha" }
	];

	let messagesData = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "Yo" },
		{ id: 4, message: "Good bye" },
		{ id: 5, message: "Bye" }
	];

	
	let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
	let messagesElements = messagesData.map( message => <Message message={message.message}/>);

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
