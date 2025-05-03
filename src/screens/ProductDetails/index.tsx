import React from 'react';
import DefaultView from '@src/components/atoms/DefaultView';
import DefaultHeader from '@src/components/atoms/DefaultHeader';
import {useGetProductDetails} from '@src/api/GET_ProductDetails';
import {RootStackScreenProps} from '@src/interfaces/NavigationInterface';
import LoaderFullScreen from '@src/components/molecules/LoaderFullScreen';
import DefaultScrollView from '@src/components/atoms/DefaultScrollView';
import NoAvailable from '@src/components/molecules/NoAvailable';
import Gap from '@src/components/atoms/Gap';
import ProductDetailsIntro from '@src/components/organisms/ProductDetails/ProductDetailsIntro';
import ProductDetailsReviews from '@src/components/organisms/ProductDetails/ProductDetailsReviews';
import ProductDetailsFooter from '@src/components/organisms/ProductDetails/ProductDetailsFooter';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAtomValue, useSetAtom} from 'jotai';
import {colorThemeAtom} from '@src/store/UserStore';
import {colors} from '@src/utils/colors';
import {
  favoriteProductsAtom,
  setFavoriteProductsAtom,
} from '@src/store/ProductStore';

export default function ProductDetails({
  route,
}: RootStackScreenProps<'ProductDetails'>) {
  const id = route.params.id;
  const {data, isPending, refetch} = useGetProductDetails({id});
  const colorTheme = useAtomValue(colorThemeAtom);
  const favoriteProducts = useAtomValue(favoriteProductsAtom);
  const setFavoriteProducts = useSetAtom(setFavoriteProductsAtom);

  const isFavorited = favoriteProducts.find(item => item.id === id);

  return (
    <DefaultView>
      <DefaultHeader
        title="Product Details"
        rightComponent={
          data ? (
            <Icon
              name={isFavorited ? 'heart' : 'heart-outline'}
              size={20}
              color={
                isFavorited
                  ? colors.primary[400]
                  : colorTheme === 'light'
                  ? colors.grey.dark
                  : colors.grey[100]
              }
            />
          ) : undefined
        }
        rightComponentOnPress={() => setFavoriteProducts(data!)}
      />
      <DefaultScrollView onRefresh={refetch}>
        {data ? (
          <>
            <ProductDetailsIntro data={data} />
            <Gap height={20} />
            <ProductDetailsReviews data={data} />
          </>
        ) : (
          <NoAvailable />
        )}
      </DefaultScrollView>
      {data && <ProductDetailsFooter data={data} />}
      <LoaderFullScreen show={isPending} />
    </DefaultView>
  );
}
