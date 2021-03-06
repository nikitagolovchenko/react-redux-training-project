import React, { Profiler } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Home from './components/Home/Home';

const App = props => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Route exact path="/" render={() => <Home />} />
				<Route path="/dialogs" render={() => <Dialog state={props.state.dialogsPage} dispatch={ props.dispatch }/>} />
				<Route
					path="/profile"
					render={() => (
						<Profile
							profilePage={props.state.profilePage}
							dispatch={props.dispatch}
						/>
					)}
				/>

				{/* <Route path="/news" render={() => <News />} />
				<Route path="/music" render={() => <Music />} />
				<Route path="/settings" render={() => <Settings />} /> */}
			</div>
		</div>
	);
};

export default App;
