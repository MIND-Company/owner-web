import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {LoginPage} from './pages/login-page/login-page';
import {ParkingsPage} from './pages/parkings-page/parkings-page';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/parkings' element={<ParkingsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
