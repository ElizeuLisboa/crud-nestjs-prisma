import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { randomBytes } from 'crypto';

@Controller('auth')
export class CsrfController {
  @Get('csrf')
  getCsrf(@Res() res: Response) {
    const csrfToken = randomBytes(24).toString('hex');
    res.cookie('XSRF-TOKEN', csrfToken, { httpOnly: false, sameSite: 'lax', path: '/' });
    return res.json({ csrfToken });
  }
}
