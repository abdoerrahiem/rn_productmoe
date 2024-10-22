import {View} from 'react-native';
import React, {useState} from 'react';
import DefaultView from '@src/components/atoms/DefaultView';
import DefaultHeader from '@src/components/atoms/DefaultHeader';
import DefaultTextInput from '@src/components/atoms/DefaultTextInput';
import tw from '@src/utils/tw';
import DefaultButton from '@src/components/atoms/DefaultButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@src/utils/colors';
import {useGetSearchProductList} from '@src/api/GET_SearchProductList';
import ProductSkeleton from '@src/components/molecules/Skeleton/ProductSkeleton';
import DefaultFlatList from '@src/components/atoms/DefaultFlatList';
import CardProduct from '@src/components/molecules/CardProduct';
import NoAvailable from '@src/components/molecules/NoAvailable';

export default function SearchProduct() {
  const [search, setSearch] = useState('');
  const {data, isLoading, refetch} = useGetSearchProductList({search});

  const onSearch = () => {
    if (search.trim().length > 0) {
      refetch();
    }
  };

  return (
    <DefaultView>
      <DefaultHeader title="Search Product" />
      <View style={tw`px-3 py-1 flex-row items-center gap-2`}>
        <View style={tw`flex-1`}>
          <DefaultTextInput
            placeHolder="Search product..."
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
            onSubmitEditing={onSearch}
          />
        </View>
        <DefaultButton
          type="icon"
          icon={<Icon name="magnify" color={colors.grey[100]} size={20} />}
          style={tw`rounded-lg h-[45px] w-[45px]`}
          onPress={onSearch}
        />
      </View>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <DefaultFlatList
          data={data?.products ?? []}
          renderItem={({item}) => <CardProduct item={item} />}
          onRefresh={refetch}
          ListEmptyComponent={<NoAvailable />}
        />
      )}
    </DefaultView>
  );
}
