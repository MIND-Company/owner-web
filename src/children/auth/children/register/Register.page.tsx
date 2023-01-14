import classes from './Register.page.styles.module.css';
import { Button, InputField, ValidatorResponse } from '@ermolaev/mind-ui';
import React, { FC, useState } from 'react';

export type IRegisterPageProps = {
  onSubmit: (phone: string, password: string) => void;
  navigateToLogin: () => void;
};

const phoneNumberValidator = (value: string): ValidatorResponse => {
  if (value.length !== 11) {
    return {
      isValid: false,
      message: 'Телефон должен быть в формате 7ХХХХХХХХХХ',
    };
  }

  return {
    isValid: true,
  };
};

export const RegisterPage: FC<IRegisterPageProps> = ({
  navigateToLogin,
  onSubmit,
}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.wrapper}>
      <InputField
        type={'numbers'}
        placeholder={'Номер телефона'}
        validators={[phoneNumberValidator]}
        valueChanges={setLogin}
      />
      <InputField
        type={'password'}
        placeholder={'Пароль'}
        valueChanges={setPassword}
      />
      <div className={classes.btns}>
        <Button
          title={'Обратно'}
          onClick={navigateToLogin}
          type={'secondary'}
        />
        <Button
          title={'Зарегистрироваться'}
          onClick={() => onSubmit(login, password)}
        />
      </div>
    </div>
  );
};
