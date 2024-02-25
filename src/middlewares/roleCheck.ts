import { Request, Response, NextFunction } from 'express';
import { ERRORMESSAGE, STATUSCODES } from 'enum';
import { sendErrorResponse } from 'common';

const checkPermissionMiddleware = (requiredPermission: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userDetails: any = req.userDetails;
    console.log(userDetails);
    const { type } = userDetails;
    if (requiredPermission.includes(type)) {
      next()
      return
    }
    sendErrorResponse(res, ERRORMESSAGE.GS403, STATUSCODES.UNAUTHORIZED)
  };
};

export {
  checkPermissionMiddleware
}