import { IsNotEmpty } from "class-validator";
import { Produto } from "src/Produtos/entities/produtos.entitie";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from 'typeorm';

@Entity({name: "tb_user"})
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    nome_usuario: string;

    @IsNotEmpty()
    @Column({length: 15, nullable: false})
    genero_usuario: string;

    @IsNotEmpty()
    @Column({length: 10, nullable: false})
    estado_civil: string;

    @IsNotEmpty()
    @Column({length: 40, nullable: false})
    profissao_usuario: string;

    @IsNotEmpty()
    @Column("decimal", {precision: 6, scale: 2})
    renda_usuario: number;

    @IsNotEmpty()
    @Column({length: 15, nullable: false})
    etnia_usuario: string;

    @IsNotEmpty()
    @Column()
    data_usuario: Date;

    @IsNotEmpty()
    @Column({length: 14, nullable: false})
    cpf_usuario: string;

    @IsNotEmpty()
    @Column({length: 12, nullable: false})
    rg_usuario: string;

    @IsNotEmpty()
    @Column({length: 9, nullable: false})
    cep_usuario: string;

    @IsNotEmpty()
    @Column({length: 150, nullable: false})
    endereco_usuario: string;

    @IsNotEmpty()
    @Column({length:14, nullable: false})
    telefone_usuario: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    email_usuario: string;
    
    @IsNotEmpty()
    @Column({length: 15, nullable: false})
    senha_usuario: string;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    descricao_usuario: string;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto : Produto []

}