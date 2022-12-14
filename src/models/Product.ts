import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export default class Product{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
}