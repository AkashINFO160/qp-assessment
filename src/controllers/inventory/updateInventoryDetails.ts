import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { IUpdateInventory, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';
import { updateInventoryService, getInventoryService } from 'services';

const updateInventoryController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('updateInventoryController', req.body))
    const { name, categoryId, description, quantity, price, status } = req.body;
    const { inventoryId } = req.params;
    const {  email } = req.userDetails;
    const inventoryID: number = parseInt(inventoryId, 10);
    const payload: IUpdateInventory = { name, categoryId, description, quantity, price, status, updatedBy: email };

    const findUse = await getInventoryService({id: inventoryID});

    if (!findUse?.details) {
      return sendErrorResponse(res, 'Record not found')
    }

    const resService: IServiceResponse = await updateInventoryService(payload, inventoryID)
    const { success, details } = resService;

    if (success) {
      logger.info(loggingDetails('updateInventoryController', resService))
      return sendSuccessResponse(res, details, STATUSCODES.ACCEPTED);
    }
  
    const errorResponse: IErrorHandler = errorMessageHandler(details);
    const { message, statusCode } = errorResponse;
    logger.error(loggingDetails('updateInventoryController', errorResponse))
    sendErrorResponse(res, message, statusCode)

  } catch (error: unknown) {
    logger.error(loggingDetails('updateInventoryController', error))
    sendErrorResponse(res, error);
  }
}


export {
  updateInventoryController
}