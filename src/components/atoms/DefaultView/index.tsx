import {useIsFocused} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StatusBar, View, ViewStyle} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {colors} from '@src/utils/colors';
import tw from '@src/utils/tw';
import {useAtomValue} from 'jotai';
import {colorThemeAtom} from '@src/store/UserStore';

interface DefaultViewProps {
  barStyle?: 'dark-content' | 'light-content';
  children?: ReactNode;
  style?: ViewStyle;
  statusBarColor?: string;
  translucent?: boolean;
}

export default function DefaultView({
  barStyle,
  children,
  style,
  statusBarColor,
  translucent,
}: DefaultViewProps) {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const colorScheme = useAtomValue(colorThemeAtom);

  const baseColor = translucent
    ? 'transparent'
    : statusBarColor
    ? statusBarColor
    : colorScheme === 'light'
    ? colors.grey[100]
    : colors.grey.dark;

  const containerStyle = {
    backgroundColor: baseColor,
    height: translucent ? 0 : insets.top,
  };

  return (
    <SafeAreaProvider>
      <View style={containerStyle}>
        {isFocused && (
          <StatusBar
            translucent={translucent}
            backgroundColor={baseColor}
            barStyle={
              barStyle
                ? barStyle
                : colorScheme === 'light'
                ? 'dark-content'
                : 'light-content'
            }
          />
        )}
      </View>
      <View style={[tw`flex-1 bg-white dark:bg-black`, style]}>{children}</View>
    </SafeAreaProvider>
  );
}
