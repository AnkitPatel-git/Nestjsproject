import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthcontrollerController } from './authcontroller/authcontroller.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthcontrollerController],
  providers: [AppService],
})
export class AppModule {}
