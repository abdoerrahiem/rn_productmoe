import {AxiosError, AxiosResponse} from 'axios';
import api from './apiBaseConfig';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {CategoryInterface} from '@src/interfaces/CategoryInterface';
import {ProductInterface} from '@src/interfaces/ProductInterface';

export interface ResponseProductList {
  products: ProductInterface[];
}

export interface RequestProductList {
  category: CategoryInterface;
}

export const getProductList = async (params: RequestProductList) => {
  return api
    .get(params.category.url.replace('https://dummyjson.com/', ''))
    .then((response: AxiosResponse<ResponseProductList>) => response.data)
    .catch(err => {
      throw new Error(err);
    });
};

export const useGetProductList = (
  params: RequestProductList,
  options?: UseQueryOptions<
    ResponseProductList,
    AxiosError,
    ResponseProductList,
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: ['product-list' + params.category.url],
    enabled: true,
    queryFn: () => getProductList(params),
    ...options,
  });
};
