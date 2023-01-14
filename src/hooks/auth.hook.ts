import { useStorage } from '@ermolaev/mind-ui';

export const enum AuthStorageConst {
  accessToken = 'access',
  refreshToken = 'refresh',
}

export const useAuth = () => {
  const storage = useStorage();
  return {
    accessToken: storage.read(AuthStorageConst.accessToken),
    refresh: storage.read(AuthStorageConst.refreshToken),
  };
};
