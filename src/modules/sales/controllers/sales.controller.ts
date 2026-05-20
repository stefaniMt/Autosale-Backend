import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSaleDto, UpdateSaleDto } from '../dto/sale.dto';
import { SalesService } from '../services/sales.service';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
        constructor( private readonly salesService: SalesService) {}

    @Post()
    create( @Body() CreateSaleDto: CreateSaleDto ) {
        return this.salesService.create(CreateSaleDto);
    }

    @Get()
    findAll() {
        return this.salesService.findAll();
    }

    @Get(':id')
    findOne( @Param( 'id', ParseIntPipe ) id: number ) {
        return this.salesService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSaleDto: UpdateSaleDto) {
        return this.salesService.update(id, updateSaleDto as any);
    }

    @Delete(':id')
    remove( @Param( 'id', ParseIntPipe ) id: number ) {
        return this.salesService.remove(id);
    }
}
