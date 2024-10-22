import {storage} from '@src/utils/storage';
import {atom} from 'jotai';

export type ColorTheme = 'light' | 'dark';

export const colorThemeAtom = atom<ColorTheme>(
  (storage.getString('color_theme') as ColorTheme) ?? 'light',
);

export const setColorThemeAtom = atom(null, (get, set, value: ColorTheme) => {
  storage.set('color_theme', value);
  set(colorThemeAtom, value);
});
