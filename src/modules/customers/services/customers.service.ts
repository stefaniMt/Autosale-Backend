import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';

@Injectable()
export class CustomersService {
     constructor(
        @InjectRepository(Customer)
        private readonly customersRepository: Repository<Customer>
    ) {}

    async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        const customer = this.customersRepository.create(createCustomerDto);
        return await this.customersRepository.save(customer);
    }

    async findAll(): Promise<Customer[]> {
        return await this.customersRepository.find();
    }

    async findOne(id: number): Promise<Customer> {
        const customer = await this.customersRepository.findOneBy({id});
        if (!customer) {
            throw new NotFoundException('Customer con id ${id} no encontrado');
        }
        return customer;
    }

    async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
        const customer = await this.findOne(id);
        Object.assign(customer, updateCustomerDto);
        return await this.customersRepository.save(customer);
    }

    async remove(id: number): Promise<void> {
        const customer = await this.findOne(id);
        await this.customersRepository.remove(customer);
    }
}

