import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from '../../customers/entities/customer.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

@Entity('sales')
export class Sale {
    @PrimaryGeneratedColumn('increment', { type: 'int4' })
    id: number;

    @Column({ type: 'int4'})
    customer_id: number;

    @Column({ type: 'int4', nullable: true})
    user_id: number;

    @Column({ type: 'int4', nullable: true})
    vehicle_id: number;

    @Column({ type: 'date' })
    sale_date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_amount: number;

    @Column({ type: 'varchar', length: 50 })
    payment_method: string;

    @Column({ type: 'varchar', length: 255 })
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => Customer, { eager: true })
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @OneToOne(() => Vehicle, { eager: true })
    @JoinColumn({ name: 'vehicle_id' })
    vehicle: Vehicle;
}