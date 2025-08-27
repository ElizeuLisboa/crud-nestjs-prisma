import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.originalUrl === "/pagamentos/webhook") {
      req.setEncoding("utf8");
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        (req as any).rawBody = data;
        next();
      });
    } else {
      next();
    }
  }
}
