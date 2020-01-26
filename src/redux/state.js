import { renderEntireTree } from "../render";

let state = {
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
};


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


// ----======00000=====-------
// добавить введенное значение (сохраненное в state) в массив сообщений и обнулить введеное значение:
export let addNewMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.enteredText,
    };

    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.enteredText = '';
    renderEntireTree(state);
}

// добавить введенное значение в state:
export let updateEnteredText = (newText) => {
    state.dialogsPage.enteredText = newText;
    renderEntireTree(state);
}

export default state;
