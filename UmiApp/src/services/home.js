import {request} from 'umi'

export const getUser = async () => {
  return request('/ptapi/login_status', {
    
  })
}