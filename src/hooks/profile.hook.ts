import { useAuthHttp } from './auth-http.hook';
import { IGetProfileRequestDto } from '../dto/get-profile-request.dto';
import { isCorrectResponse } from '@ermolaev/mind-ui';
import { IProfile } from '../models/profile';

export const useProfile = () => {
  const http = useAuthHttp();
  return (): Promise<IProfile | null> =>
    http<void, IGetProfileRequestDto>({
      method: 'GET',
      url: '/profile',
    }).then((res: IGetProfileRequestDto) => {
      if (!isCorrectResponse(res)) {
        return null;
      }

      return {
        phoneNumber: res.phone,
      };
    });
};
