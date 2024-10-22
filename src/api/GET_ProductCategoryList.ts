import {AxiosError, AxiosResponse} from 'axios';
import api from './apiBaseConfig';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {CategoryInterface} from '@src/interfaces/CategoryInterface';

export const getProductCategoryList = async () => {
  return api
    .get('/products/categories')
    .then((response: AxiosResponse<CategoryInterface[]>) => response.data)
    .catch(err => {
      throw new Error(err);
    });
};

export const useGetProductCategoryList = (
  options?: UseQueryOptions<
    CategoryInterface[],
    AxiosError,
    CategoryInterface[],
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: ['category-list'],
    enabled: true,
    queryFn: getProductCategoryList,
    ...options,
  });
};
