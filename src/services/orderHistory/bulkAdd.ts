import {
  ORDERHISTORYMODEL,
} from 'models';
import {  IOrderHistory } from 'interface';

const addBulkOrderHistoryService = async (payload: Array<IOrderHistory>, transaction: any) => {
  try {

    const data: any = await ORDERHISTORYMODEL.bulkCreate(payload, transaction)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {addBulkOrderHistoryService}