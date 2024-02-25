import {
  USERMODEL,
  ROLEMODEL
} from 'models';
import {IGetUser } from 'interface';


const getUserService = async (payload: IGetUser) => {
  try {

    const data: any = await USERMODEL.findOne({ where: payload, include: [{model: ROLEMODEL}] })
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {getUserService}