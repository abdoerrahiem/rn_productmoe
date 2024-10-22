import tw from '@src/utils/tw';
import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface DefaultTextProps {
  subtitle?: string | number;
  subtitleStyle?: TextStyle;
  subtitlePress?: () => void;
  subtitleProps?: TextProps;
  title?: string | number;
  titleStyle?: TextStyle | TextStyle[];
  titlePress?: () => void;
  titleProps?: TextProps;
}

export default function DefaultText({
  title,
  titleStyle,
  titlePress,
  titleProps,
  subtitle,
  subtitleStyle,
  subtitleProps,
  subtitlePress,
}: DefaultTextProps) {
  return (
    <Text
      style={[
        tw`text-black dark:text-white font-sf-regular text-base`,
        titleStyle,
      ]}
      onPress={titlePress}
      {...titleProps}>
      {title}
      {subtitle && (
        <Text
          style={[
            tw`text-black dark:text-white font-sf-regular text-base`,
            subtitleStyle,
          ]}
          onPress={subtitlePress}
          {...subtitleProps}>
          {' '}
          {subtitle}
        </Text>
      )}
    </Text>
  );
}
