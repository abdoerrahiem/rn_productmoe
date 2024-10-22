import {View} from 'react-native';
import React from 'react';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Switch from '@src/components/atoms/Switch';
import Gap from '@src/components/atoms/Gap';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {useAppColorScheme} from 'twrnc';
import {colorThemeAtom, setColorThemeAtom} from '@src/store/UserStore';
import {useGetProductCategoryList} from '@src/api/GET_ProductCategoryList';
import DefaultFlatList from '@src/components/atoms/DefaultFlatList';
import CardCategory from '@src/components/molecules/CardCategory';
import CategorySkeleton from '@src/components/molecules/Skeleton/CategorySkeleton';
import {
  activeCategoryAtom,
  additionalCategoryAtom,
} from '@src/store/CategoryStore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@src/utils/colors';
import {cartProductsAtom} from '@src/store/ProductStore';
import {navigationRef} from '@src/utils/navigation';

export default function ProductListHeader() {
  const [_, __, setColorScheme] = useAppColorScheme(tw);
  const setColorTheme = useSetAtom(setColorThemeAtom);
  const colorTheme = useAtomValue(colorThemeAtom);
  const {data, isPending} = useGetProductCategoryList();
  const [activeCtg, setActiveCtg] = useAtom(activeCategoryAtom);
  const addCtg = useAtomValue(additionalCategoryAtom);
  const cartProducts = useAtomValue(cartProductsAtom);

  const handleSwitchMode = () => {
    const value = colorTheme === 'light' ? 'dark' : 'light';
    setColorScheme(value);
    setColorTheme(value);
  };

  return (
    <View style={tw`pt-2 bg-white dark:bg-black shadow-md`}>
      <View style={tw`flex-row items-center px-3`}>
        <DefaultText
          title="Product List"
          titleStyle={tw`font-sf-semibold text-lg flex-1`}
        />
        <DefaultText title="Dark mode" titleStyle={tw`text-xs`} />
        <Gap width={5} />
        <Switch
          value={colorTheme === 'dark'}
          onValueChange={handleSwitchMode}
        />
        <Gap width={15} />
        <Icon
          name="magnify"
          size={20}
          color={colorTheme === 'light' ? colors.grey.dark : colors.grey[100]}
          onPress={() => navigationRef.navigate('SearchProduct')}
        />
        <Gap width={15} />
        <View style={tw`relative`}>
          <Icon
            name="cart"
            size={20}
            color={colorTheme === 'light' ? colors.grey.dark : colors.grey[100]}
          />
          {cartProducts.length > 0 && (
            <View
              style={tw`absolute rounded-full w-[15px] h-[15px] bg-primary-400 -top-2 -right-1`}>
              <DefaultText
                title={cartProducts.length > 99 ? '99' : cartProducts.length}
                titleStyle={tw`text-[8px] text-white text-center leading-4`}
              />
            </View>
          )}
        </View>
      </View>
      {isPending ? (
        <CategorySkeleton />
      ) : (
        <DefaultFlatList
          horizontal={true}
          data={data ? [addCtg, ...data] : []}
          renderItem={({item}) => (
            <CardCategory
              item={item}
              active={item.slug === activeCtg?.slug}
              onPress={() => setActiveCtg(item)}
            />
          )}
          contentContainerStyle={tw`gap-1`}
        />
      )}
    </View>
  );
}
