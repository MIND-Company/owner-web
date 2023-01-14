import React from 'react';
import { LoginPage } from './Login.page';
import { useStorage } from '@ermolaev/mind-ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from './hooks/login.hook';
import { AuthStorageConst } from '../../../../hooks/auth.hook';
// import { useToast } from '../../../../hooks/toast.hook';

export const LoginContainer = () => {
  const storage = useStorage();
  const navigate = useNavigate();
  // const toast = useToast();
  const location = useLocation();
  const stateFromRegistration = location.state;

  const onSubmitHandler = async (phone: string, password: string) => {
    try {
      const response = await useLogin('+' + phone, password);
      storage.write(AuthStorageConst.accessToken, response.access);
      storage.write(AuthStorageConst.refreshToken, response.refresh);
      navigate('/cabinet/parkings');
    } catch (e: any) {
      // toast.showError(e?.message ?? 'Ошибка');
    }
  };

  if (
    stateFromRegistration &&
    stateFromRegistration.phone &&
    stateFromRegistration.password
  ) {
    return (
      <LoginPage
        onSubmit={onSubmitHandler}
        navigateToRegistration={() => navigate('/auth/register')}
        prefillData={stateFromRegistration}
      />
    );
  }

  return (
    <LoginPage
      onSubmit={onSubmitHandler}
      navigateToRegistration={() => navigate('/auth/register')}
    />
  );
};
