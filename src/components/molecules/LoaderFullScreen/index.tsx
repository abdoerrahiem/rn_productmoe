import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {colors} from '@src/utils/colors';
import tw from '@src/utils/tw';

export default function LoaderFullScreen({show}: {show: boolean}) {
  return (
    <Modal isVisible={show}>
      <View style={tw`bg-white self-center p-7 rounded-xl`}>
        <ActivityIndicator color={colors.primary[400]} size="large" />
      </View>
    </Modal>
  );
}
