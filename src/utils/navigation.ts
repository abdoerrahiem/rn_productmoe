import {
  DrawerActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from '@src/interfaces/NavigationInterface';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const currentRoute = () => {
  return navigationRef.getCurrentRoute();
};

export const openDrawer = () => {
  navigationRef.dispatch(DrawerActions.openDrawer());
};

export const closeDrawer = () => {
  navigationRef.dispatch(DrawerActions.closeDrawer());
};
