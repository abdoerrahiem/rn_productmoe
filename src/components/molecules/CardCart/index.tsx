import {Alert, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CartInterface} from '@src/interfaces/ProductInterface';
import tw from '@src/utils/tw';
import DefaultText from '@src/components/atoms/DefaultText';
import Gap from '@src/components/atoms/Gap';
import DefaultButton from '@src/components/atoms/DefaultButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAtom, useAtomValue} from 'jotai';
import {cartProductsAtom} from '@src/store/ProductStore';
import {showToast} from '@src/utils/toast';
import {colors} from '@src/utils/colors';
import {colorThemeAtom} from '@src/store/UserStore';

const CardCart = ({item}: {item: CartInterface}) => {
  const [qty, setQty] = useState(item.qty);
  const [isActive, setIsActive] = useState(item.isActive);
  const [carts, setCarts] = useAtom(cartProductsAtom);

  const theme = useAtomValue(colorThemeAtom);

  const onAddQuantity = () => {
    const currQty = qty + 1;
    setQty(currQty);

    const updatedCarts = carts.map(cart => {
      if (cart.id === item.id) {
        return {...cart, qty: currQty};
      }
      return cart;
    });

    setCarts(updatedCarts);
  };

  const onRemoveQuantity = () => {
    const currQty = qty - 1;
    if (currQty > 0) {
      setQty(currQty);

      const updatedCarts = carts.map(cart => {
        if (cart.id === item.id) {
          return {...cart, qty: currQty};
        }
        return cart;
      });

      setCarts(updatedCarts);
    } else {
      Alert.alert(
        'Remove Product',
        'Are you sure want to remove this product from your cart?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Remove',
            onPress: () => {
              setCarts(carts.filter(cart => cart.id !== item.id));
              showToast('success', 'Product removed');
            },
          },
        ],
      );
    }
  };

  const onToggleActive = () => {
    const currActive = !isActive;
    setIsActive(currActive);

    const updatedCarts = carts.map(cart => {
      if (cart.id === item.id) {
        return {...cart, isActive: currActive};
      }
      return cart;
    });

    setCarts(updatedCarts);
  };

  return (
    <View
      style={tw`bg-grey-200 dark:bg-grey-800 mb-3 rounded-lg shadow-md flex-row p-2`}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={tw`w-[20px] h-[20px] rounded-[4px] border border-gray-300 justify-center items-center self-center mr-1`}
        onPress={onToggleActive}>
        {isActive && (
          <Icon name="check" color={colors.primary[400]} size={18} />
        )}
      </TouchableOpacity>
      <Image
        source={{uri: item.thumbnail}}
        resizeMode="cover"
        style={tw`w-[60px] h-[60px] rounded-md`}
      />
      <View style={tw`flex-1 mx-1`}>
        <DefaultText title={item.title} titleStyle={tw`font-sf-medium`} />
        <Gap height={5} />
        <DefaultText
          title={`$${(item.price * qty).toFixed(2)}`}
          titleStyle={tw`font-sf-medium text-base`}
        />
        <Gap height={5} />
        <View style={tw`flex-row items-center self-end`}>
          <DefaultButton
            type="icon"
            icon={
              <Icon
                name="minus"
                color={theme === 'dark' ? colors.grey[100] : colors.grey.dark}
              />
            }
            style={tw`w-[25px] h-[25px] bg-grey-300 dark:bg-grey-600`}
            onPress={onRemoveQuantity}
          />
          <DefaultText
            title={qty}
            titleStyle={tw`mx-3 font-sf-medium text-base`}
          />
          <DefaultButton
            type="icon"
            icon={
              <Icon
                name="plus"
                color={theme === 'dark' ? colors.grey[100] : colors.grey.dark}
              />
            }
            style={tw`w-[25px] h-[25px] bg-grey-300 dark:bg-grey-600`}
            onPress={onAddQuantity}
          />
        </View>
      </View>
    </View>
  );
};

export default CardCart;
