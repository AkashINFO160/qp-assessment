import {
  CATEGORYMODEL,
} from 'models';
import { IAddCategory } from 'interface';


const addCategoryService = async (payload: IAddCategory) => {
  try {

    const data: any = await CATEGORYMODEL.create(payload)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    return {success: false, details: error}
  }
}


export {addCategoryService}