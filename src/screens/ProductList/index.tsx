import React from 'react';
import DefaultView from '@src/components/atoms/DefaultView';
import ProductListHeader from '@src/components/organisms/ProductList/ProductListHeader';
import ProductListContent from '@src/components/organisms/ProductList/ProductListContent';

export default function ProductList() {
  return (
    <DefaultView>
      <ProductListHeader />
      <ProductListContent />
    </DefaultView>
  );
}
