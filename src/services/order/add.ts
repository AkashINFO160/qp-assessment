import {
  ORDERMODEL,
} from 'models';
import {  IOrder } from 'interface';

const addOrderService = async (payload: IOrder, transaction: any) => {
  try {

    const data: any = await ORDERMODEL.create(payload, transaction)
    return { success: true, details: data }
    
  } catch (error: unknown) {
    console.log('Error', error)
    return {success: false, details: error}
  }
}


export {addOrderService}