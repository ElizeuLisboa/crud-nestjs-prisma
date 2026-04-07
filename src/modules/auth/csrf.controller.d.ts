import { Response } from 'express';
export declare class CsrfController {
    getCsrf(res: Response): Response<any, Record<string, any>>;
}
