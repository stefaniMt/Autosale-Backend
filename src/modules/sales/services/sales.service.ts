import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from '../entities/sale.entity';
import { CreateSaleDto, UpdateSaleDto } from '../dto/sale.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sale)
        private readonly saleRepository: Repository<Sale>
    ) {}

    async create(createSaleDto: CreateSaleDto): Promise<Sale> {
        const sale = this.saleRepository.create(createSaleDto);
        return await this.saleRepository.save(sale);
    }

    async findAll(): Promise<Sale[]> {
        return await this.saleRepository.find();
    }

    async findOne( id: number ): Promise<Sale> {
        const sale = await this.saleRepository.findOneBy({id});
        if (!sale) {
            throw new NotFoundException('Sale con id ${id} no encontrado');
        }
        return sale;
    }

    async update( id: number, updateSaleDto: UpdateSaleDto): Promise<Sale> {
        const sale = await this.findOne(id);
        Object.assign(sale, updateSaleDto);
        return await this.saleRepository.save(sale);
    }

    async remove( id: number): Promise<void> {
        const sale = await this.findOne(id);
        await this.saleRepository.remove(sale);
    }
}
