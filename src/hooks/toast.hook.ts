export interface IToast {
  showError: (msg: string) => void;
}

export const useToast = (): IToast => {
  return {
    showError: (msg: string) => {
      console.error(msg);
    },
  };
};
