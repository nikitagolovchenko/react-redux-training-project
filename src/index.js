import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [	
    { id: 1, message: "Hello World!", likesCount: 5},
    { id: 2, message: "It's my first project", likesCount: 12},
];

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

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
