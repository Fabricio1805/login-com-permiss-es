import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Permission from "./Permission";

@Entity('roles')
export default class Role{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: 'permissions_roles',
        joinColumn: { name: 'role_id' },
        inverseJoinColumn: { name: 'permission_id' },
    })
    permission: Permission[];
    
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
}
