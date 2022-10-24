import { IsNotEmpty } from "class-validator";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import { OneToMany } from "typeorm/decorator/relations/OneToMany";
import { Produto } from "src/Produtos/entities/produtos.entitie";

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

    @OneToMany(()=> Produto, (produto) => produto.categoria)
    produto : Produto []

    
}