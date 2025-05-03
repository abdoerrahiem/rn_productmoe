import React from 'react';
import DefaultView from '@src/components/atoms/DefaultView';
import DefaultHeader from '@src/components/atoms/DefaultHeader';
import CartList from '@src/components/organisms/Cart/CartList';

export default function Cart() {
  return (
    <DefaultView>
      <DefaultHeader title="Shopping Cart" />
      <CartList />
    </DefaultView>
  );
}
