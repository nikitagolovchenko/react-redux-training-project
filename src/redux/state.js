let store = {
    // приватное свойство:
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello World!', likesCount: 5 },
                { id: 2, message: "It's my first project", likesCount: 12 },
            ],
    
            newPostText: "New post text"
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
            enteredText: ''
        }
    },

    getState() {
        return this._state;
    },

    // приватный метод:
    _callSubscriber() {  // заглушка
        console.log('State was changed');
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    // добавить введенное значение (сохраненное в state) в массив сообщений и обнулить введеное значение:
    addNewMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.enteredText,
        };
    
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.enteredText = '';
        this._callSubscriber(this._state);
    },

    // добавить введенное значение в state:
    updateEnteredText(newText) {
        this._state.dialogsPage.enteredText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;  // паттерн observer(наблюдатель)
    }


}


export default store;
window.store = store;
