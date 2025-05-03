import React, {useState} from 'react';
import {useAtomValue} from 'jotai';
import DefaultFlatList from '@src/components/atoms/DefaultFlatList';
import NoAvailable from '@src/components/molecules/NoAvailable';
import {cartProductsAtom} from '@src/store/ProductStore';
import CardCart from '@src/components/molecules/CardCart';
import DefaultButton from '@src/components/atoms/DefaultButton';
import tw from '@src/utils/tw';
import ModalCheckout from '@src/components/molecules/ModalCheckout';

export default function CartList() {
  const cartProducts = useAtomValue(cartProductsAtom);
  const [showCheckoutDetails, setShowCheckoutDetails] = useState(false);

  const totalPrice = cartProducts
    .filter(item => item.isActive)
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  const onCheckout = () => setShowCheckoutDetails(true);

  return (
    <>
      <DefaultFlatList
        data={cartProducts}
        renderItem={({item}) => <CardCart item={item} />}
        ListEmptyComponent={<NoAvailable />}
      />
      {cartProducts.length > 0 && (
        <DefaultButton
          type="solid"
          label={`Checkout ($${totalPrice})`}
          style={tw`m-3`}
          onPress={onCheckout}
        />
      )}
      <ModalCheckout
        show={showCheckoutDetails}
        hide={() => setShowCheckoutDetails(false)}
      />
    </>
  );
}
