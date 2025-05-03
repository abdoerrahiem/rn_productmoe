import Toast from 'react-native-toast-message';

export const showToast = (
  type: 'success' | 'error' | 'info',
  title: string,
) => {
  Toast.show({
    type,
    text1: title,
    position: 'bottom',
  });
};
