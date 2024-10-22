import {TouchableOpacity} from 'react-native';
import React from 'react';
import {CategoryInterface} from '@src/interfaces/CategoryInterface';
import DefaultText from '@src/components/atoms/DefaultText';
import tw from '@src/utils/tw';

const CardCategory = ({
  item,
  active,
  onPress,
}: {
  item: CategoryInterface;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`border border-grey-500 rounded-full px-4 py-1 ${
        active ? 'bg-primary-400 border-white' : ''
      }`}
      onPress={onPress}>
      <DefaultText
        title={item.name}
        titleStyle={tw`text-sm ${
          active ? 'text-white font-sf-medium' : 'text-grey-500'
        }`}
      />
    </TouchableOpacity>
  );
};

export default CardCategory;
