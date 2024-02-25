import {
  USERMODEL,
} from 'models';
import {  IAddUser } from 'interface';


const addUserService = async (payload: IAddUser) => {
  try {

    const data: any = await USERMODEL.create(payload)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {addUserService}