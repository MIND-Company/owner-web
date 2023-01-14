import {
  IHttpRequest,
  IHttpResponseError,
  useHttp,
  useStorage,
} from '@ermolaev/mind-ui';
import { AuthStorageConst } from './auth.hook';

export const useAuthHttp = (): (<Req, Res>(
  configObject: IHttpRequest<Req>,
) => any) => {
  const http = useHttp();
  const storage = useStorage();
  return <Req, Res>(config: IHttpRequest<Req>) => {
    return http({
      ...config,
      headers: {
        ...config.headers,
        Authorization: 'Bearer ' + storage.read(AuthStorageConst.accessToken),
      },
    });
  };
};
