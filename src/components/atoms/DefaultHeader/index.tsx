import {TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import tw from '@src/utils/tw';
import {navigationRef} from '@src/utils/navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DefaultText from '../DefaultText';
import {colors} from '@src/utils/colors';
import {useAtomValue} from 'jotai';
import {colorThemeAtom} from '@src/store/UserStore';

export interface DefaultHeaderInterface {
  leftComponent?: ReactNode;
  leftComponentOnPress?: () => void;
  rightComponent?: ReactNode;
  rightComponentOnPress?: () => void;
  title?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  leftComponentColor?: string;
}

export default function DefaultHeader({
  leftComponent,
  leftComponentOnPress,
  rightComponent,
  rightComponentOnPress,
  title,
  titleStyle,
  style,
  leftComponentColor,
}: DefaultHeaderInterface) {
  const colorTheme = useAtomValue(colorThemeAtom);

  const onLeftPress = () => {
    if (leftComponentOnPress) {
      leftComponentOnPress();
    } else {
      navigationRef.goBack();
    }
  };
  return (
    <View style={[tw`flex-row items-center p-3 bg-white dark:bg-black`, style]}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={tw`absolute left-3 bg-transparent p-2 rounded-full z-10`}
        onPress={onLeftPress}>
        {leftComponent ?? (
          <Icon
            name="chevron-left"
            color={
              leftComponentColor
                ? leftComponentColor
                : colorTheme === 'light'
                ? colors.grey.dark
                : colors.grey[100]
            }
            size={24}
            onPress={onLeftPress}
          />
        )}
      </TouchableOpacity>
      {title && (
        <DefaultText
          title={title}
          titleStyle={[
            tw`font-sf-semibold text-lg text-center flex-1`,
            titleStyle || {},
          ]}
        />
      )}
      {rightComponent && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={tw`absolute right-3 bg-transparent p-2 rounded-full z-10`}
          onPress={rightComponentOnPress}>
          {rightComponent}
        </TouchableOpacity>
      )}
    </View>
  );
}
