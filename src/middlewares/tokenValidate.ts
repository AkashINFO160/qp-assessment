import { Request, Response, NextFunction } from 'express';
import { jwtVerifyService } from 'services';
import { ERRORMESSAGE, STATUSCODES } from 'enum';
import { sendErrorResponse } from 'common';


const tokenValidateMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || null;

  if (!token) {
    sendErrorResponse(res, ERRORMESSAGE.GS0404, STATUSCODES.BADREQUEST)
    return
  }
  const { success, details } = jwtVerifyService(token);
  if (success && details) {
    req.userDetails = details
    next();
  } else {
    sendErrorResponse(res, ERRORMESSAGE.GS403, STATUSCODES.UNAUTHORIZED)
  }
  };

export {
  tokenValidateMiddleware
}