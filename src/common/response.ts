import { Response } from 'express';
import { STATUSCODES, ERRORMESSAGE } from 'enum';
import { IErrorHandler } from 'interface';

const sendErrorResponse = (
  res: Response,
  error: any = {},
  statusCode: number = STATUSCODES.BADREQUEST
): void => {
  res.status(statusCode).json({
    success: false,
    error
  });
}

const sendSuccessResponse = (
  res: Response,
  data: any = {},
  statusCode: number = STATUSCODES.SUCCESS
): void => {
  res.status(statusCode).json({
    success: true,
    data
  });
}

const errorMessageHandler = (
  err: unknown,
  message: string | string[]  = ERRORMESSAGE.GS500,
  statusCode = STATUSCODES.INTERNALSERVERERROR
): IErrorHandler => {
  const { errors }: any = err;

  if (Array.isArray(errors)) {
    message = errors.map((item: { message: string }) => item?.message)
    statusCode = STATUSCODES.BADREQUEST
  }
  
  return {
    statusCode,
    message
  }
}


export {
  sendErrorResponse,
  sendSuccessResponse,
  errorMessageHandler
}