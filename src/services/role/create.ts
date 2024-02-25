import {
  ROLEMODEL,
} from 'models';
import {  IRole } from 'interface';

const addRoleService = async (payload: IRole) => {
  try {

    const data: any = await ROLEMODEL.create(payload)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {addRoleService}