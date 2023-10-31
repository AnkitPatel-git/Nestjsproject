import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthcontrollerController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Req() req: Request): string {
    return 'This action returns all cats';
  }
  @Get('a**')
  findaAll(@Req() req: Request): string {
    return 'This action returns all cats';
  }
}
