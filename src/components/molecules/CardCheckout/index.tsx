import {Image, View} from 'react-native';
import React from 'react';
import {CartInterface} from '@src/interfaces/ProductInterface';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Gap from '@src/components/atoms/Gap';

const CardCheckout = ({item}: {item: CartInterface}) => {
  return (
    <View
      style={tw`bg-grey-200 dark:bg-grey-800 mb-3 rounded-lg shadow-md flex-row items-center p-2`}>
      <Image
        source={{uri: item.thumbnail}}
        resizeMode="cover"
        style={tw`w-[60px] h-[60px] rounded-md`}
      />
      <View style={tw`flex-1 mx-1`}>
        <DefaultText title={item.title} titleStyle={tw`font-sf-medium`} />
        <Gap height={5} />
        <DefaultText
          title={`$${(item.price * item.qty).toFixed(2)}`}
          titleStyle={tw`font-sf-medium text-base`}
          subtitle={` (${item.qty}x . $${item.price})`}
          subtitleStyle={tw`text-grey-500 text-xs leading-normal`}
        />
        <Gap height={5} />
      </View>
    </View>
  );
};

export default CardCheckout;
