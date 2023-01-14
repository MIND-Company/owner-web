import { ContentType, isCorrectResponse, useHttp } from '@ermolaev/mind-ui';

type RegisterRequestDto = {
  phone: string;
  password: string;
  password_retype: string;
};

export const useRegister = async (phone: string, password: string) => {
  const http = useHttp();

  return http<RegisterRequestDto, void>({
    url: '/register/',
    method: 'POST',
    body: {
      phone,
      password,
      password_retype: password,
    },
    headers: {
      contentType: ContentType.JSON,
    },
  }).then((response) => {
    if (!isCorrectResponse(response)) {
      throw new Error('Не удалось зарегистрировать пользователя');
    }

    return response;
  });
};
