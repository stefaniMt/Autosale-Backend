import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn('increment', { type: 'int4' })
    id: number;

    @Column({ type: 'varchar', length: 100 })
    first_name: string;

    @Column({ type: 'varchar', length: 100 })
    last_name: string;

    @Column({ type: 'varchar', length: 255 })
    document_number: string;

    @Column({ type: 'varchar', length: 255 })
    phone: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    deleted_at: Date;
}