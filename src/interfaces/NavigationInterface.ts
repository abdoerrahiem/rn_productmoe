import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: {
    id: number;
  };
  SearchProduct: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
