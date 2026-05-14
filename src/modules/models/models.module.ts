import { Module } from '@nestjs/common';
import { ModelsController } from './controllers/models.controller';
import { ModelsService } from './services/models.service';
import { VehicleModel } from './entities/vehicle-model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleModel])],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class ModelsModule {}