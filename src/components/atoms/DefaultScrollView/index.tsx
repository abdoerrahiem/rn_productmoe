import {colors} from '@src/utils/colors';
import React, {ReactNode} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
} from 'react-native';

export interface IDefaultScrollView extends ScrollViewProps {
  children: ReactNode;
  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export default function DefaultScrollView({
  children,
  refreshing,
  onRefresh,
  onEndReached,
  ...rest
}: IDefaultScrollView) {
  const handleInfinityScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    let mHeight = event.nativeEvent.layoutMeasurement.height;
    let cSize = event.nativeEvent.contentSize.height;
    let Y = event.nativeEvent.contentOffset.y;
    if (Math.ceil(mHeight + Y) >= cSize) {
      return true;
    }
    return false;
  };

  return (
    <ScrollView
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          colors={[colors.primary[400], colors.primary[400]]}
          refreshing={refreshing ?? false}
          tintColor={colors.primary[400]}
          onRefresh={onRefresh}
        />
      }
      onScroll={event => {
        if (handleInfinityScroll(event)) {
          onEndReached?.call;
        }
      }}
      {...rest}>
      {children}
    </ScrollView>
  );
}
