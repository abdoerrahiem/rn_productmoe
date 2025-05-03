import {AxiosError, AxiosResponse} from 'axios';
import api from './apiBaseConfig';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {ProductInterface} from '@src/interfaces/ProductInterface';

export interface RequestProductDetails {
  id: number;
}

export const getProductDetails = async (params: RequestProductDetails) => {
  return api
    .get(`/products/${params.id}`)
    .then((response: AxiosResponse<ProductInterface>) => response.data)
    .catch(err => {
      throw new Error(err);
    });
};

export const useGetProductDetails = (
  params: RequestProductDetails,
  options?: UseQueryOptions<
    ProductInterface,
    AxiosError,
    ProductInterface,
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: ['product-details' + params.id],
    enabled: true,
    queryFn: () => getProductDetails(params),
    ...options,
  });
};
