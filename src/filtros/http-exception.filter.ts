import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { Express } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let message = 'Ocorreu um erro';

    // Trata especificamente o ParseIntPipe
    if (
      exception instanceof BadRequestException &&
      typeof exceptionResponse === 'object' &&
      (exceptionResponse as any).message?.includes('numeric string is expected')
    ) {
      message = 'O ID informado na URL deve ser um número inteiro válido';
    } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
      message = (exceptionResponse as any).message || message;
    } else if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    }

    response.status(status).json({
      statusCode: status,
      error: exception.name,
      message,
    });
  }
}
