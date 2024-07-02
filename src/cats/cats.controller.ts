
import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}