import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText, addNewMessage, updateEnteredText } from './redux/state'
import { BrowserRouter } from 'react-router-dom';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={ addPost } updateNewPostText={ updateNewPostText } addNewMessage={ addNewMessage } updateEnteredText={ updateEnteredText }/>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
