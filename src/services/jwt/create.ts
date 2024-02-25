import JWT from 'jsonwebtoken';
import { IJwtPayload, IServiceResponse } from 'interface'
import { CONFIG } from 'config';

const jwtCreateService = (payload: IJwtPayload): IServiceResponse => {
  try {
    const data = JWT.sign(payload, CONFIG.SECRETKEY, { expiresIn: 60 * 60 })
    return { success: true, details: data }
  } catch (error) {
    console.log(error)
    return {success: false, details: error}
  }
}

export {
  jwtCreateService
}