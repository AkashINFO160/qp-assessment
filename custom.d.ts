import { Request } from 'express';

declare module 'express' {
  interface Request {
    userDetails?: any;
  }
}