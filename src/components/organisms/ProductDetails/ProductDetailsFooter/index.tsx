import {View} from 'react-native';
import React from 'react';
import DefaultText from '@src/components/atoms/DefaultText';
import tw from '@src/utils/tw';
import DefaultButton from '@src/components/atoms/DefaultButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@src/utils/colors';
import {ProductInterface} from '@src/interfaces/ProductInterface';
import {cartProductsAtom, setCartProductsAtom} from '@src/store/ProductStore';
import {useAtomValue, useSetAtom} from 'jotai';

export default function ProductDetailsFooter({data}: {data: ProductInterface}) {
  const cartProducts = useAtomValue(cartProductsAtom);
  const setCartProducts = useSetAtom(setCartProductsAtom);

  const isCarted = cartProducts.find(item => item.id === data.id);

  return (
    <View
      style={tw`bg-white dark:bg-grey-800 shadow-lg rounded-t-xl px-3 py-5 flex-row items-center`}>
      <DefaultText
        title={`$${data.price}`}
        titleStyle={tw`font-sf-bold text-xl flex-1`}
      />
      <DefaultButton
        icon={
          <Icon
            name={isCarted ? 'delete' : 'cart'}
            color={colors.grey[100]}
            size={20}
          />
        }
        label={isCarted ? 'Remove Cart' : 'Add To Cart'}
        onPress={() => setCartProducts(data)}
      />
    </View>
  );
}
