import {colors} from '@src/utils/colors';
import tw from '@src/utils/tw';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DefaultText from '../DefaultText';

interface DefaultToastProps {
  title: string;
  type: 'success' | 'error' | 'info';
}
export default function DefaultToast({type, title}: DefaultToastProps) {
  const {width} = useWindowDimensions();

  const backgroundColor =
    type === 'success'
      ? 'bg-alert-success'
      : type === 'error'
      ? 'bg-alert-error'
      : 'bg-alert-warning';

  return (
    <View
      style={[
        {width: width * 0.95},
        tw`p-3 flex-row items-center rounded-lg ${backgroundColor}`,
      ]}>
      <Icon
        name={
          type === 'success'
            ? 'check-circle'
            : type === 'info'
            ? 'information'
            : 'close-circle'
        }
        size={20}
        color={colors.grey[100]}
      />
      <DefaultText title={title} titleStyle={tw`flex-1 ml-2 text-white`} />
    </View>
  );
}
