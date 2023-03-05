import { PurchaseDetailData } from 'src/views/Page04/page04.interface';
import request from './request'

//登録
export const LoginApi = (data: any) => request({ method: 'post', url: '/api/v1/user/login', data });
//新規
export const registerApi = (data: any) => request({ method: 'post', url: '/api/v1/user/register', data });

/**
 * Page02
 */

export const bookInfoApi = (data: any) => request({ method: 'post', url: '/api/v1/book/bookInfo', data });

export const itemInfoApi = (data: any) => request({ method: 'post', url: '/api/v1/user/itemInfo', data });

/**
 * Page03
 */
export const userInfoApi = (data: any) => request({ method: 'post', url: '/api/v1/user/userInfo', data });

/**
 * Page04
 */

export const purchaseInfoApi = async (data: any)=> {
    const response = await request({ method: 'post', url: '/api/v1/purchase/purchaseInfo', data });
    return response.data;
  };
  
  
/**
 * Page05
 */

export const sellInfoApi = async (data: any)=> {
  const response = await request({ method: 'post', url: '/api/v1/sell/sellInfo', data });
  return response.data;
};
