import {View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Gap from '@src/components/atoms/Gap';
import {useAtomValue, useSetAtom} from 'jotai';
import {cartProductsAtom} from '@src/store/ProductStore';
import DefaultFlatList from '@src/components/atoms/DefaultFlatList';
import CardCheckout from '../CardCheckout';
import DefaultButton from '@src/components/atoms/DefaultButton';
import {navigationRef} from '@src/utils/navigation';
import {showToast} from '@src/utils/toast';

export default function ModalCheckout({
  show,
  hide,
}: {
  show: boolean;
  hide: () => void;
}) {
  const cartProducts = useAtomValue(cartProductsAtom);
  const setCartProducts = useSetAtom(cartProductsAtom);
  const carts = cartProducts.filter(item => item.isActive);
  const totalPrice = carts
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  const onDone = () => {
    hide();
    setTimeout(() => {
      navigationRef.goBack();
      showToast('success', 'Checkout success');
      const updatedCart = cartProducts.filter(item => !item.isActive);
      setCartProducts(updatedCart);
    }, 500);
  };

  return (
    <Modal
      isVisible={show}
      style={tw`m-0`}
      onBackButtonPress={hide}
      onBackdropPress={hide}>
      <View
        style={tw`absolute bottom-0 p-3 bg-grey-background dark:bg-grey-900 rounded-t-xl max-h-[80%] max-w-2xl w-full self-center`}>
        <View
          style={tw`w-[100px] h-[5px] rounded-full bg-grey-400 self-center`}
        />
        <Gap height={15} />
        <DefaultText
          title="Checkout Details"
          titleStyle={tw`font-sf-semibold text-center text-lg`}
        />
        <Gap height={10} />
        <DefaultFlatList
          data={carts}
          renderItem={({item}) => <CardCheckout item={item} />}
          contentContainerStyle={tw`px-1`}
        />
        <View style={tw`flex-row justify-between items-center px-1`}>
          <DefaultText
            title="Total"
            titleStyle={tw`font-sf-medium text-base`}
          />
          <DefaultText
            title={`$${totalPrice}`}
            titleStyle={tw`font-sf-medium text-xl`}
          />
        </View>
        <Gap height={20} />
        <DefaultButton label="Done" onPress={onDone} />
      </View>
    </Modal>
  );
}
