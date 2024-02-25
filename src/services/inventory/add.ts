import {
  INVENTORYMODEL,
} from 'models';
import {  IAddInventory } from 'interface';


const addInventoryService = async (payload: IAddInventory) => {
  try {

    const data: any = await INVENTORYMODEL.create(payload)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {addInventoryService}