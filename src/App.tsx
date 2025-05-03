import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from '@src/navigations';
import BootSplash from 'react-native-bootsplash';
import {navigationRef} from './utils/navigation';
import {Provider, getDefaultStore} from 'jotai';
import Toast, {ToastConfig} from 'react-native-toast-message';
import DefaultToast from './components/atoms/DefaultToast';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useDeviceContext} from 'twrnc';
import tw from './utils/tw';
import {colorThemeAtom} from './store/UserStore';

export const store = getDefaultStore();

export const toastConfig: ToastConfig = {
  success: ({text1}) => <DefaultToast title={text1!} type="success" />,
  error: ({text1}) => <DefaultToast title={text1!} type="error" />,
  info: ({text1}) => <DefaultToast title={text1!} type="info" />,
};

export default function App() {
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: store.get(colorThemeAtom),
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => BootSplash.hide()}>
          <Router />
          <Toast config={toastConfig} />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
