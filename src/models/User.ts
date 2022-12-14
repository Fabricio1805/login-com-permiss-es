import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Role from "./Role";

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false})
    username: string;
        
    @Column({ type: 'varchar', nullable: false })
    password: string;
    
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @ManyToMany(() => Role)
    @JoinTable({
        name: 'users_roles',
        joinColumn: { name: 'user_id' },
        inverseJoinColumn: { name: 'role_id' },
    })
    roles: Role[];
}