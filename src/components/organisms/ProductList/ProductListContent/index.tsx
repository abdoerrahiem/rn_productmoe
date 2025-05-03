import React from 'react';
import {useAtomValue} from 'jotai';
import {activeCategoryAtom} from '@src/store/CategoryStore';
import {useGetProductList} from '@src/api/GET_ProductList';
import ProductSkeleton from '@src/components/molecules/Skeleton/ProductSkeleton';
import DefaultFlatList from '@src/components/atoms/DefaultFlatList';
import CardProduct from '@src/components/molecules/CardProduct';
import NoAvailable from '@src/components/molecules/NoAvailable';

export default function ProductListContent() {
  const category = useAtomValue(activeCategoryAtom);
  const {data, isPending, refetch} = useGetProductList({category});

  return isPending ? (
    <ProductSkeleton />
  ) : (
    <DefaultFlatList
      data={data?.products ?? []}
      renderItem={({item}) => <CardProduct item={item} />}
      onRefresh={refetch}
      ListEmptyComponent={<NoAvailable />}
    />
  );
}
