import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { IGetInventory, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';
import { getAllInventoryService } from 'services';

const getInventoryController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('getInventoryController', req.body))
    const {  id } = req.body;
    const payload: IGetInventory = { id  };

    const resService: IServiceResponse = await getAllInventoryService(payload)
    const { success, details } = resService;

    if (success) {
      logger.info(loggingDetails('getInventoryController', resService))
      return sendSuccessResponse(res, details, STATUSCODES.ACCEPTED);
    }
  
    const errorResponse: IErrorHandler = errorMessageHandler(details);
    const { message, statusCode } = errorResponse;
    logger.error(loggingDetails('getInventoryController', errorResponse))
    sendErrorResponse(res, message, statusCode)

  } catch (error: unknown) {
    logger.error(loggingDetails('getInventoryController', error))
    sendErrorResponse(res, error);
  }
}


export {
  getInventoryController
}