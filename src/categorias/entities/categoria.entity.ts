import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "category"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, nullable: false})
    fornecedor: string;

    @Column({length: 150, nullable: false})
    modelo: string;

    @Column({length: 150, nullable: false})
    material: string;
}
