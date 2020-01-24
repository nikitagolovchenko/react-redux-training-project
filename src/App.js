import React, { Profiler } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/profile" render={ () => <Profile posts={props.posts}/> } />
					<Route path="/dialogs" render={ () => <Dialog dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />

					<Route path="/news" render={ () => <News/> } />
					<Route path="/music" render={ () => <Music /> } />
					<Route path="/settings" render={ () => <Settings /> } />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
