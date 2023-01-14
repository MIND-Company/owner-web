import React from 'react';
import { RegisterPage } from './Register.page';
import { useLogin } from '../login/hooks/login.hook';
import { AuthStorageConst } from '../../../../hooks/auth.hook';
import { useStorage } from '@ermolaev/mind-ui';
import { useNavigate } from 'react-router-dom';
import { useRegister } from './hooks/register.hook';

export const RegisterContainer = () => {
  const storage = useStorage();
  const navigate = useNavigate();

  const onSubmitHandler = async (phone: string, password: string) => {
    try {
      const response = await useRegister('+' + phone, password);
      navigate('/auth/login', { state: { phone: '+' + phone, password } });
    } catch (e: any) {
      // toast.showError(e?.message ?? 'Ошибка');
    }
  };

  return (
    <RegisterPage
      onSubmit={onSubmitHandler}
      navigateToLogin={() => navigate('/auth/login')}
    />
  );
};
