import { Controller, Get, Post } from '@nestjs/common'; //this imports the get and the post functions of the nest
import { AppService } from './app.service'; //this imports the appservice file

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
