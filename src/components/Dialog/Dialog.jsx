import React from 'react';
import styles from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';

const Dialog = props => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/1" activeClassName={styles.active}>
						Nikita
					</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/2" activeClassName={styles.active}>
						Oleg
					</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/3" activeClassName={styles.active}>
						Sveta
					</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/4" activeClassName={styles.active}>
						Sasha
					</NavLink>
				</div>
			</div>

			<div className={styles.messages}>
				<div className={styles.message}>Hi</div>
				<div className={styles.message}>How are you?</div>
				<div className={styles.message}>Yo</div>
			</div>
		</div>
	);
};

export default Dialog;
