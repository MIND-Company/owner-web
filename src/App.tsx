import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginContainer } from './children/auth/children/login/Login.container';
import { CabinetLayout } from './children/cabinet/layouts/Cabinet.layout';
import { ParkingsContainer } from './children/cabinet/children/parkings/Parkings.container';
import { RegisterContainer } from './children/auth/children/register/Register.container';
import { ParkingContainer } from './children/cabinet/children/parkings/children/parking/Parking.container';
import { ProfileContainer } from './children/cabinet/children/profile/pages/Profile.container';
import { TransportContainer } from './children/cabinet/children/parkings/children/parking/children/transport/Transport.container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />}></Route>
        </Route>
        <Route path="/cabinet" element={<CabinetLayout />}>
          <Route path="parkings" element={<ParkingsContainer />} />
          <Route path="parkings/:id" element={<ParkingContainer />} />
          <Route
            path="parkings/:id/transport"
            element={<TransportContainer />}
          />
          <Route path="profile" element={<ProfileContainer />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
