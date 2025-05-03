import {View} from 'react-native';
import React from 'react';
import {Skeleton} from 'moti/skeleton';
import tw from '@src/utils/tw';
import {useAtomValue} from 'jotai';
import {colorThemeAtom} from '@src/store/UserStore';

export default function ProductSkeleton() {
  const colorTheme = useAtomValue(colorThemeAtom);

  return (
    <View style={tw`p-3`}>
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <View key={item} style={tw`mb-3`}>
            <Skeleton
              width="100%"
              height={120}
              radius={15}
              colorMode={colorTheme}
            />
          </View>
        );
      })}
    </View>
  );
}
