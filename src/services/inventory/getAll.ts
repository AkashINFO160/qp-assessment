import { Op } from 'sequelize';
import {
  INVENTORYMODEL,
} from 'models';
import {  IGetInventory } from 'interface';


const getAllInventoryService = async (payload: IGetInventory) => {
  try {

    const data: any = await INVENTORYMODEL.findAll({
      where: {
        id: {
          [Op.in]: payload.id
        }
      }
    })
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {
  getAllInventoryService
}