import { ContentType, isCorrectResponse, useHttp } from '@ermolaev/mind-ui';

type LoginRequestDto = {
  phone: string;
  password: string;
};

type LoginResponseDto = {
  access: string;
  refresh: string;
};

export const useLogin = async (phone: string, password: string) => {
  const http = useHttp();

  return http<LoginRequestDto, LoginResponseDto>({
    url: '/login/',
    method: 'POST',
    body: {
      phone,
      password,
    },
    headers: {
      contentType: ContentType.JSON,
    },
  }).then((response) => {
    if (!isCorrectResponse(response)) {
      throw new Error('Не удалось авторизовать пользователя');
    }

    return response;
  });
};
