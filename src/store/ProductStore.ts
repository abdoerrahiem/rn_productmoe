import {ProductInterface} from '@src/interfaces/ProductInterface';
import {storage} from '@src/utils/storage';
import {showToast} from '@src/utils/toast';
import {atom} from 'jotai';

export const favoriteProductsAtom = atom<ProductInterface[]>(
  storage.getString('fav_products')
    ? (JSON.parse(storage.getString('fav_products')!) as ProductInterface[])
    : [],
);

export const setFavoriteProductsAtom = atom(
  null,
  (get, set, value: ProductInterface) => {
    const currentData = get(favoriteProductsAtom);
    const foundItem = currentData.find(item => item.id === value.id);
    if (foundItem) {
      const filteredData = currentData.filter(item => item.id !== value.id);
      storage.set('fav_products', JSON.stringify(filteredData));
      set(favoriteProductsAtom, filteredData);
      showToast('success', 'Favorite removed.');
    } else {
      const filteredData = [...currentData, value];
      storage.set('fav_products', JSON.stringify(filteredData));
      set(favoriteProductsAtom, filteredData);
      showToast('success', 'Favorite added.');
    }
  },
);

export const cartProductsAtom = atom<ProductInterface[]>(
  storage.getString('cart_products')
    ? (JSON.parse(storage.getString('cart_products')!) as ProductInterface[])
    : [],
);

export const setCartProductsAtom = atom(
  null,
  (get, set, value: ProductInterface) => {
    const currentData = get(cartProductsAtom);
    const foundItem = currentData.find(item => item.id === value.id);
    if (foundItem) {
      const filteredData = currentData.filter(item => item.id !== value.id);
      storage.set('cart_products', JSON.stringify(filteredData));
      set(cartProductsAtom, filteredData);
      showToast('success', 'Product removed from cart.');
    } else {
      const filteredData = [...currentData, value];
      storage.set('cart_products', JSON.stringify(filteredData));
      set(cartProductsAtom, filteredData);
      showToast('success', 'Product added to cart.');
    }
  },
);
