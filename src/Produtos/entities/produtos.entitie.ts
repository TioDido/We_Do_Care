import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/Categoria/entities/categoria.entity";
import { Usuario } from "src/Usuario/entities/usuario.entity";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";

@Entity({name: "tb_product"})
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column("decimal",{precision: 3, scale:2})
    preco: number;

    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    detalhe_produto: string;

    @IsNotEmpty()
    @Column()
    quantidad: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete : "CASCADE"  
    })
    categoria : Categoria

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete : "CASCADE"  
    })
    usuario : Usuario

}