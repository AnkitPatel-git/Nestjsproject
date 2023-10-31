import { Controller, Get } from '@nestjs/common';

@Controller('authcontroller')
export class AuthcontrollerController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
