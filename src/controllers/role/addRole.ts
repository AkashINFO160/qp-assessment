import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { addRoleService } from 'services';
import { IRole, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';

const addRoleController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('addRoleController', req.body))
    const { name } = req.body;
    const payload: IRole = { name };

    const resService: IServiceResponse = await addRoleService(payload)
    const { success, details } = resService;

    if (success) {
      logger.info(loggingDetails('addRoleController', resService))
      return sendSuccessResponse(res, details, STATUSCODES.ACCEPTED);
    }
  
    const errorResponse: IErrorHandler = errorMessageHandler(details);
    const { message, statusCode } = errorResponse;
    logger.error(loggingDetails('addRoleController', errorResponse))
    sendErrorResponse(res, message, statusCode)

  } catch (error: unknown) {
    logger.error(loggingDetails('addRoleController', error))
    sendErrorResponse(res, error);
  }
}


export {
  addRoleController
}