import { Request, Response } from 'express';
import { sendSuccessResponse, sendErrorResponse } from 'common';
import { STATUSCODES, ERRORMESSAGE } from 'enum';
import { addOrderService, addBulkOrderHistoryService, updateInventoryService, getAllInventoryService } from 'services';
import { IOrderRequest, IServiceResponse, IOrderHistory } from 'interface';
import { logger, loggingDetails } from 'services';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';


const addOrderController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('addOrderController', req.body))
    const { data } = req.body;
    const payload: Array<IOrderRequest> = data;

    const { id, email } = req.userDetails;

    const productDetails: { itemId: number[], errorDetails: { message: string, itemId: number }[], inventoryQunatity: { [key: string]: number} } = {
      itemId: [],
      errorDetails: [],
      inventoryQunatity: {

      }
    }

    data.forEach(({ itemId, quantity}: IOrderRequest) => {
      productDetails.itemId.push(itemId)
      productDetails.inventoryQunatity[itemId] = quantity

    })
    const inventtoryDetails = await getAllInventoryService({ id: productDetails.itemId })

    console.log(inventtoryDetails)
    
    if (data.length !== inventtoryDetails.details.length) {
      sendErrorResponse(res, ERRORMESSAGE.GS002);
      return
    }

    inventtoryDetails.details.forEach((item: any) => {

      const { id } = item
   
      console.log(item.quantity)

      const inStock = (item.quantity - productDetails.inventoryQunatity[id?.toString()]) < 0
  
      if (item.status != 'INSTOCK' || inStock) {
        productDetails.errorDetails.push({
          message: item.status === 'OUTSTOCK' || (inStock && !item.quantity)? ERRORMESSAGE.GS003 : `Product left ${item.quantity}`,
          itemId: id
        })
      }

    })

    if (productDetails.errorDetails.length) {
      sendErrorResponse(res, productDetails.errorDetails);
      return
    }
    

    MYSQL_CONNECTION_SEQUELIZE.transaction(async (trnx) => {

      try {

        const orderService: IServiceResponse = await addOrderService({ userId: id, createdBy: email, updatedBy: email }, { transaction: trnx })
        const orderHistoryPayload: Array<IOrderHistory> = payload.map((item: IOrderRequest) => ({ ...item,createdBy: email, updatedBy: email, orderId: parseInt(orderService.details.id, 10)}))

        await addBulkOrderHistoryService(orderHistoryPayload, { transaction: trnx })

        const updateInventory  = inventtoryDetails.details.map(async (item: any) => {
          const { id } = item
          return updateInventoryService({
            quantity: item.quantity - productDetails.inventoryQunatity[id?.toString()],
            updatedBy: email
          }, id, trnx)
          
        })

        await Promise.all(updateInventory);

        sendSuccessResponse(res, ERRORMESSAGE.GS001, STATUSCODES.ACCEPTED);
      } catch (error) {
        logger.error(loggingDetails('addOrderController', error))
        sendErrorResponse(res, error);
      }

    })


  } catch (error: unknown) {
    console.log(error)
    logger.error(loggingDetails('addOrderController', error))
    sendErrorResponse(res, error);
  }
}


export {
  addOrderController
}