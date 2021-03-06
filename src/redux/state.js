// action types
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_ENTERED_TEXT = 'UPDATE-ENTERED-TEXT';

let store = {
	// приватное свойство:
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hello World!', likesCount: 5 },
				{ id: 2, message: "It's my first project", likesCount: 12 },
			],

			newPostText: 'New post text',
		},

		dialogsPage: {
			messagesData: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Good bye' },
				{ id: 5, message: 'Bye' },
			],

			dialogsData: [
				{ id: 1, name: 'Nikita' },
				{ id: 2, name: 'Oleg' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
			],
			// ------
			enteredText: '',
		},
	},

	// приватный метод:
	_callSubscriber() {
		// заглушка
		console.log('State was changed');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer; // паттерн observer(наблюдатель)
	},

	// dispatch - метод которые передаем в компоненты, передаем объект action
	// action = { type: 'ADD-POST }
	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_NEW_MESSAGE) {
			// добавить введенное значение (сохраненное в state) в массив сообщений и обнулить введеное значение:
			let newMessages = {
				id: 6,
				message: this._state.dialogsPage.enteredText,
			};

			this._state.dialogsPage.messagesData.push(newMessages);
			this._state.dialogsPage.enteredText = '';
			this._callSubscriber(this._state);

			let newMessage = {
				id: 6,
				message: this._state.dialogsPage.enteredText,
			};

			this._state.dialogsPage.messagesData.push(newMessage);
			this._state.dialogsPage.enteredText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_ENTERED_TEXT) {
			this._state.dialogsPage.enteredText = action.newText;
			this._callSubscriber(this._state);
		}
	},
};

// action creator:
export const addPostActionCreator = () => ({
	type: ADD_POST,
});

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export default store;
window.store = store;
