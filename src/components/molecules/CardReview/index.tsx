import {View} from 'react-native';
import React from 'react';
import {ProductInterface} from '@src/interfaces/ProductInterface';
import tw from '@src/utils/tw';
import {Image} from 'react-native';
import {DEFAULT_USER_URI} from '@src/utils/constant';
import DefaultText from '@src/components/atoms/DefaultText';
import dayjs from 'dayjs';
import {colors} from '@src/utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '@src/components/atoms/Gap';

export default function CardReview({
  item,
}: {
  item: ProductInterface['reviews'][0];
}) {
  return (
    <View
      style={tw`mb-4 border-b border-b-grey-300 dark:border-b-grey-800 pb-2`}>
      <View style={tw`flex-row items-center gap-2`}>
        <Image
          source={{uri: DEFAULT_USER_URI}}
          resizeMode="cover"
          style={tw`bg-grey-500 w-[40px] h-[40px] rounded-full`}
        />
        <View>
          <DefaultText
            title={item.reviewerName}
            titleStyle={tw`text-sm font-sf-medium`}
          />
          <View style={tw`flex-row items-center`}>
            <DefaultText
              title={dayjs(item.date).format('DD MMM YYYY')}
              titleStyle={tw`text-xs mr-2`}
            />
            <View
              style={tw`flex-row items-center border border-grey-400 rounded-full self-start px-2 py-[2px]`}>
              <Icon name="star" color={colors.alert.warning} size={14} />
              <DefaultText
                title={item.rating}
                titleStyle={tw`text-xs ml-[2px]`}
              />
            </View>
          </View>
        </View>
      </View>
      <Gap height={5} />
      <DefaultText title={item.comment} titleStyle={tw`text-sm`} />
    </View>
  );
}
