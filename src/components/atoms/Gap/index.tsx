import React from 'react';
import {View} from 'react-native';

const Gap = ({
  height,
  width,
  backgroundColor,
  ...otherStyles
}: {
  height?: number;
  width?: number;
  backgroundColor?: string;
}) => {
  return <View style={{height, width, backgroundColor, ...otherStyles}} />;
};

export default Gap;
