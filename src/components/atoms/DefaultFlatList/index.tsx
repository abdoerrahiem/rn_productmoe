import {colorThemeAtom} from '@src/store/UserStore';
import {colors} from '@src/utils/colors';
import tw from '@src/utils/tw';
import {useAtomValue} from 'jotai';
import React, {RefObject, useCallback} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  RefreshControl,
  ViewStyle,
} from 'react-native';

export interface IDefaultFlatList<DataType> extends FlatListProps<DataType> {
  data: DataType[];
  defaultRef?: RefObject<FlatList>;
  onRefresh?: () => void;
  refreshing?: boolean;
  renderItem: ListRenderItem<any>;
  contentContainerStyle?: ViewStyle;
}

export default function DefaultFlatList<DataType>({
  refreshing,
  onRefresh,
  data,
  renderItem,
  defaultRef,
  contentContainerStyle,
  ...rest
}: IDefaultFlatList<DataType>) {
  const colorScheme = useAtomValue(colorThemeAtom);

  const renderItemWithColorScheme = useCallback(
    (itemProps: any) => {
      return renderItem({
        ...itemProps,
        colorScheme,
      });
    },
    [colorScheme, renderItem],
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(_, key) => key.toString()}
      ref={defaultRef}
      renderItem={renderItemWithColorScheme}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          colors={[colors.primary[400], colors.primary[400]]}
          refreshing={refreshing ?? false}
          tintColor={colors.primary[400]}
          onRefresh={onRefresh}
        />
      }
      contentContainerStyle={[tw`p-3`, contentContainerStyle]}
      {...rest}
    />
  );
}
