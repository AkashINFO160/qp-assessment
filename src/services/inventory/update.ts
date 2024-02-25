import {
  INVENTORYMODEL,
} from 'models';
import {  IUpdateInventory } from 'interface';


const updateInventoryService = async (payload: IUpdateInventory, id: number, transaction?: any) => {
  try {

    const data: any = await INVENTORYMODEL.update(payload, { where: { id: id }, transaction })
    console.log(data)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {updateInventoryService}