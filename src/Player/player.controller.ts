import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller("player")
export class PlayerController {
  constructor() {}

  @Get()
  getHello(): string {
    return "Asdasdasdasd";
  }
}