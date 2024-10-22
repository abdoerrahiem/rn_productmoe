import {Image, View, ViewStyle} from 'react-native';
import React from 'react';
import tw from '@src/utils/tw';
import LogoNotFound from '@src/assets/images/search.png';
import DefaultText from '@src/components/atoms/DefaultText';

export default function NoAvailable({
  title,
  subtitle,
  style,
}: {
  title?: string;
  subtitle?: string;
  style?: ViewStyle;
}) {
  return (
    <View style={[tw`flex-1 justify-center items-center py-3`, style]}>
      <Image
        source={LogoNotFound}
        style={tw`w-[200px] h-[200px] mb-2 self-center`}
      />
      <DefaultText
        title={title ?? 'Empty Data'}
        titleStyle={tw`mb-2 text-center font-sf-semibold`}
      />
      <DefaultText
        title={subtitle ?? 'The data you are looking for is not ready yet.'}
        titleStyle={tw`text-center text-sm`}
      />
    </View>
  );
}
