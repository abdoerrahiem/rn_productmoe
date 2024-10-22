import {View, ViewStyle} from 'react-native';
import React from 'react';
import {Skeleton} from 'moti/skeleton';
import {MotiSkeletonProps} from 'moti/build/skeleton/types';
import tw from '@src/utils/tw';

interface DefaultFlatListInterface extends Omit<MotiSkeletonProps, 'Gradient'> {
  style?: ViewStyle;
}

export default function DefaultSkeleton({
  style,
  ...rest
}: DefaultFlatListInterface) {
  return (
    <View style={[tw`p-3`, style]}>
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <View key={item} style={tw`mb-2`}>
            <Skeleton
              width="100%"
              height={80}
              radius={8}
              colorMode="light"
              {...rest}
            />
          </View>
        );
      })}
    </View>
  );
}
