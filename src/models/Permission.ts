import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('permissions')
export default class Permission{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
}