import {
  INVENTORYMODEL,
} from 'models';


const getInventoryService = async (payload: any) => {
  try {

    const data: any = await INVENTORYMODEL.findOne({ where:  payload})
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {getInventoryService}