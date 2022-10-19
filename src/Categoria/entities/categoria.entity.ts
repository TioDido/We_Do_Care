import { IsNotEmpty } from "class-validator";
import {Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity({name: "tb_category"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    fornecedor : string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    modelo: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    material: string;
}