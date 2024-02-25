import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { IAddUser, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';
import { addUserService } from 'services';

const addUserController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('addUserController', req.body))
    const { name, roleId, email } = req.body;
    const payload: IAddUser = { name, roleId, email };

    const resService: IServiceResponse = await addUserService(payload)
    const { success, details } = resService;

    if (success) {
      logger.info(loggingDetails('addUserController', resService))
      return sendSuccessResponse(res, details, STATUSCODES.ACCEPTED);
    }
  
    const errorResponse: IErrorHandler = errorMessageHandler(details);
    const { message, statusCode } = errorResponse;
    logger.error(loggingDetails('addUserController', errorResponse))
    sendErrorResponse(res, message, statusCode)

  } catch (error: unknown) {
    logger.error(loggingDetails('addUserController', error))
    sendErrorResponse(res, error);
  }
}


export {
  addUserController
}