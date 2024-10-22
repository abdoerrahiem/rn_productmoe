import {colors} from '@src/utils/colors';
import tw from '@src/utils/tw';
import React, {ReactNode, useState} from 'react';
import {
  TextInput as TextInputBase,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DefaultText from '../DefaultText';

type TextInputType = TextInputProps & {
  placeHolder?: string;
  value?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  onPress?: () => void;
  error?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  label?: string;
  containerStyle?: ViewStyle;
  disabled?: boolean;
};

const DefaultTextInput = (props: TextInputType) => {
  const {
    placeHolder,
    rightIcon,
    leftIcon,
    value,
    onPress,
    error,
    style,
    textStyle,
    label,
    containerStyle,
    disabled,
    ...res
  } = props;
  const [borderColor, setBorderColor] = useState(
    'border-gray-300 border-[1px]',
  );

  const onFocusForm = () => {
    setBorderColor('border-primary-400 border-[1px]');
  };

  const onBlurForm = () => {
    setBorderColor('border-gray-300 border-[1px]');
  };

  return (
    <>
      {label && (
        <DefaultText
          title={label}
          titleStyle={tw`font-sf-semibold mb-2 text-base`}
        />
      )}
      <View style={[tw`gap-1`, style]}>
        <TouchableOpacity
          style={[
            tw`bg-white dark:bg-black flex-row h-[45px] items-center px-3 rounded-lg ${
              error ? 'border-primary-500 border-[1px]' : borderColor
            } ${disabled ? 'bg-gray-300' : ''}`,
            containerStyle,
          ]}
          activeOpacity={0.7}
          disabled={!onPress}
          onPress={onPress}>
          {leftIcon && <View>{leftIcon}</View>}
          <TextInputBase
            autoCapitalize="none"
            value={value}
            placeholder={placeHolder}
            placeholderTextColor={colors.grey[500]}
            style={[
              tw`flex-1 font-sf-regular text-black dark:text-white text-base ${
                disabled ? 'text-gray-500' : ''
              }`,
              textStyle,
            ]}
            onFocus={onFocusForm}
            onBlur={onBlurForm}
            readOnly={disabled}
            {...res}
          />
          {rightIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={tw`h-7 w-7 justify-center items-center`}
              onPress={onPress}>
              {rightIcon}
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        {error && (
          <View style={tw`flex-row gap-1`}>
            <Icon
              name="alert"
              color={colors.alert.error}
              size={16}
              style={tw`mt-[2px]`}
            />
            <DefaultText
              title={error}
              titleStyle={tw`text-sm text-alert-error flex-1`}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default DefaultTextInput;
