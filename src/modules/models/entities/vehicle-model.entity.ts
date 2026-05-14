import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Brand } from '../../brands/entities/brand.entity';

@Entity()
export class VehicleModel {
  @PrimaryGeneratedColumn('increment', {type: 'int4'})
  id: number;

  @Column({type: 'int4'})
  brand_id: number;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 50})
  type: string;

  @ManyToOne(() => Brand, {eager: true})
  @JoinColumn({name: 'brand_id'})
  brand: Brand;
}
