import { Request, Response } from 'express';
import { sendSuccessResponse, errorMessageHandler, sendErrorResponse } from 'common';
import { STATUSCODES } from 'enum';
import { IGetUser, IServiceResponse, IErrorHandler } from 'interface';
import { logger, loggingDetails } from 'services';
import {  getUserService, jwtCreateService } from 'services';

const loginUserController = async (req: Request, res: Response) => {
  try {

    logger.info(loggingDetails('loginUserController', req.body))
    const payload: IGetUser = { email: req.body.email };

    const resService: IServiceResponse = await getUserService(payload)
    const { success, details } = resService;

    if (!success || !details) {
      logger.info(loggingDetails('loginUserController', resService))
      return sendErrorResponse(res, 'Use Not Found');
    }

    const { email, role, id } = details;

    const token = jwtCreateService({ email, type: role?.name, id })
    
    if (token.success) {
      sendSuccessResponse(res, token.details, STATUSCODES.ACCEPTED);
      return
    }
    
    logger.error(loggingDetails('loginUserController', token))
    return sendErrorResponse(res, 'Use Not Found');

  } catch (error: unknown) {
    logger.error(loggingDetails('loginUserController', error))
    sendErrorResponse(res, error);
  }
}


export {
  loginUserController
}