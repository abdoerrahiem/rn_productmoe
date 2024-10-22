import {View} from 'react-native';
import React from 'react';
import {ProductInterface} from '@src/interfaces/ProductInterface';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@src/utils/colors';
import Gap from '@src/components/atoms/Gap';
import CardReview from '@src/components/molecules/CardReview';

export default function ProductDetailsReviews({
  data,
}: {
  data: ProductInterface;
}) {
  return (
    <View style={tw`px-3`}>
      <View style={tw`flex-row items-center`}>
        <DefaultText title="Reviews" titleStyle={tw`font-sf-semibold flex-1`} />
        <View style={tw`flex-row items-center`}>
          <Icon name="star" color={colors.alert.warning} size={18} />
          <DefaultText
            title={data.rating}
            titleStyle={tw`text-sm font-sf-medium ml-1`}
          />
        </View>
      </View>
      <Gap height={10} />
      {data.reviews.map((item, key) => (
        <CardReview item={item} key={key} />
      ))}
    </View>
  );
}
