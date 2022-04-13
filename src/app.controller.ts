import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.request.dto';
import { DeleteOneDto } from './dto/delete.request.dto';
import { UpdateOneDto } from './dto/update.request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Put()
  updateOne(@Body() data: UpdateOneDto) {
    return this.appService.updateOne(data);
  }

  @Delete()
  deleteOne(@Body() data: DeleteOneDto) {
    return this.appService.deleteOne(data);
  }

  @Post()
  addOne(@Body() data: CreateDto) {
    return this.appService.addOne(data);
  }
}
