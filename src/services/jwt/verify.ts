import JWT from 'jsonwebtoken';
import { IServiceResponse } from 'interface'
import { CONFIG } from 'config';

const jwtVerifyService = (token: string): IServiceResponse => {
  try {
    
    const data =  JWT.verify(token, CONFIG.SECRETKEY)
    return { success: true, details: data }
    
  } catch (error) {
    return {success: false, details: error}
  }
}

export {
  jwtVerifyService
}