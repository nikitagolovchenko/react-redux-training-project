import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateNewPostText, addNewMessage, updateEnteredText } from './redux/state'
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={ addPost } updateNewPostText={ updateNewPostText } addNewMessage={ addNewMessage } updateEnteredText={ updateEnteredText }/>
        </BrowserRouter>, document.getElementById('root')
    );
}
