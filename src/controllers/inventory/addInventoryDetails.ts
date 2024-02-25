import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { IAddInventory, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';
import { addInventoryService } from 'services';

const addInventoryController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('addInventoryController', req.body))
    const { name, categoryId, description, quantity, price, status } = req.body;
    const {  email } = req.userDetails;
    const payload: IAddInventory = { name, categoryId, description, quantity, price, status, updatedBy: email, createdBy: email };

    const resService: IServiceResponse = await addInventoryService(payload)
    const { success, details } = resService;

    if (success) {
      logger.info(loggingDetails('addInventoryController', resService))
      return sendSuccessResponse(res, details, STATUSCODES.ACCEPTED);
    }
  
    const errorResponse: IErrorHandler = errorMessageHandler(details);
    const { message, statusCode } = errorResponse;
    logger.error(loggingDetails('addInventoryController', errorResponse))
    sendErrorResponse(res, message, statusCode)

  } catch (error: unknown) {
    logger.error(loggingDetails('addInventoryController', error))
    sendErrorResponse(res, error);
  }
}


export {
  addInventoryController
}