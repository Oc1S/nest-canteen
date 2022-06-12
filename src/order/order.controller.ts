import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.create(createOrderDto);
  }

  @Get('all')
  findAll() {
    return this.orderService.findAll();
  }

  @Get('')
  findOne(@Query('id') id: string) {
    return this.orderService.findOne(+id);
  }
}
