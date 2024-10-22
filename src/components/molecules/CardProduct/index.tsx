import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProductInterface} from '@src/interfaces/ProductInterface';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Gap from '@src/components/atoms/Gap';
import {navigationRef} from '@src/utils/navigation';

const CardProduct = ({item}: {item: ProductInterface}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`bg-grey-200 dark:bg-grey-800 mb-3 rounded-lg shadow-md flex-row p-2`}
      onPress={() => navigationRef.navigate('ProductDetails', {id: item.id})}>
      <Image
        source={{uri: item.thumbnail}}
        resizeMode="cover"
        style={tw`w-[100px] h-[100px] rounded-md`}
      />
      <View style={tw`flex-1 mx-1`}>
        <DefaultText title={item.title} titleStyle={tw`font-sf-medium`} />
        <Gap height={5} />
        <DefaultText
          title={`$${item.price}`}
          titleStyle={tw`font-sf-medium text-xl`}
        />
        <Gap height={10} />
        <DefaultText
          title={item.description}
          titleStyle={tw`text-xs text-grey-700 dark:text-grey-500`}
          titleProps={{numberOfLines: 1}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;
