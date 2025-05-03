import {AxiosError, AxiosResponse} from 'axios';
import api from './apiBaseConfig';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {ProductInterface} from '@src/interfaces/ProductInterface';

export interface ResponseSearchProductList {
  products: ProductInterface[];
}

export interface RequestSearchProductList {
  search: string;
}

export const getSearchProductList = async (
  params: RequestSearchProductList,
) => {
  return api
    .get(`/products/search?q=${params.search}`)
    .then((response: AxiosResponse<ResponseSearchProductList>) => response.data)
    .catch(err => {
      throw new Error(err);
    });
};

export const useGetSearchProductList = (
  params: RequestSearchProductList,
  options?: UseQueryOptions<
    ResponseSearchProductList,
    AxiosError,
    ResponseSearchProductList,
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: ['search-product-list'],
    enabled: false,
    queryFn: () => getSearchProductList(params),
    ...options,
  });
};
