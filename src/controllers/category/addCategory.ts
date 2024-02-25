import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { addCategoryService } from 'services';
import { IAddCategory, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';

const addCategoryController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('addCategory', req.body))
    const { name } = req.body;
    const {  email } = req.userDetails;
    const payload: IAddCategory = { name, createdBy: email, updatedBy: email };

    const resService: IServiceResponse = await addCategoryService(payload)
    const { success, details } = resService;

    if (success) {
      logger.info(loggingDetails('addCategory', resService))
      return sendSuccessResponse(res, details, STATUSCODES.ACCEPTED);
    }
  
    const errorResponse: IErrorHandler = errorMessageHandler(details);
    const { message, statusCode } = errorResponse;
    logger.error(loggingDetails('addCategory', errorResponse))
    sendErrorResponse(res, message, statusCode)

  } catch (error: unknown) {
    logger.error(loggingDetails('addCategory', error))
    sendErrorResponse(res, error);
  }
}


export {
  addCategoryController
}