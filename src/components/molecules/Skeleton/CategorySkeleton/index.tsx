import {View} from 'react-native';
import React from 'react';
import {Skeleton} from 'moti/skeleton';
import tw from '@src/utils/tw';
import {useAtomValue} from 'jotai';
import {colorThemeAtom} from '@src/store/UserStore';

export default function CategorySkeleton() {
  const colorTheme = useAtomValue(colorThemeAtom);

  return (
    <View style={tw`p-3 flex-row gap-1`}>
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <Skeleton
            key={item}
            width={80}
            height={30}
            radius={20}
            colorMode={colorTheme}
          />
        );
      })}
    </View>
  );
}
