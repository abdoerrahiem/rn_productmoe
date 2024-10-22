import {CategoryInterface} from '@src/interfaces/CategoryInterface';
import {atom} from 'jotai';

const allCategory = {
  slug: 'all',
  name: 'All',
  url: 'https://dummyjson.com/products',
};
export const additionalCategoryAtom = atom<CategoryInterface>(allCategory);
export const activeCategoryAtom = atom<CategoryInterface>(allCategory);
