import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private usersRepository: Repository<Order>,
  ) {}

  async create({ price, desc, isDone }: CreateOrderDto) {
    const order = new Order();
    order.price = price;
    order.desc = desc;
    order.isDone = isDone;
    return await this.usersRepository.save(order);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
  }
}
