import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import tw from '@src/utils/tw';
import {colors} from '@src/utils/colors';

type DefaultButtonProps = {
  type?: 'solid' | 'outline' | 'icon';
  label?: string;
  onPress: () => void;
  icon?: ReactNode;
  style?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
  labelStyle?: TextStyle;
};
const DefaultButton = (props: DefaultButtonProps) => {
  const {
    type = 'solid',
    label,
    onPress,
    icon,
    style,
    loading,
    disabled,
    labelStyle,
  } = props;

  if (type === 'outline') {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          tw`h-[45px] rounded-lg items-center justify-center border-primary-400 border-[1px] flex-row`,
          style,
        ]}>
        {icon && <View style={tw`mr-[5px]`}>{icon}</View>}
        <Text
          style={[
            tw`uppercase text-primary-400 font-sf-semibold tracking-[0.5]`,
            labelStyle,
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  if (type === 'icon') {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          tw`bg-primary-400 h-[40px] w-[40px] justify-center items-center rounded-full`,
          style,
        ]}>
        {icon}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        tw`bg-primary-400 h-[45px] rounded-lg items-center justify-center flex-row px-3 ${
          disabled ? 'bg-primary-200' : ''
        }`,
        style,
      ]}>
      {icon && <View style={tw`mr-[5px]`}>{icon}</View>}
      {loading ? (
        <ActivityIndicator color={colors.grey[100]} />
      ) : (
        <Text
          style={[
            tw`text-white font-sf-semibold uppercase tracking-[0.5]`,
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default DefaultButton;
