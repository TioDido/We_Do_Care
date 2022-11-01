import { IsNotEmpty } from "class-validator";
import { Produto } from "src/Produtos/entities/produtos.entitie";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger"

@Entity({name: "tb_user"})
export class Usuario{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    nome_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 15, nullable: false})
    genero_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 10, nullable: false})
    estado_civil: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 40, nullable: false})
    profissao_usuario: string;


    @ApiProperty()
    @IsNotEmpty()
    @Column("decimal", {precision: 6, scale: 2})
    renda_usuario: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 15, nullable: false})
    etnia_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column()
    data_usuario: Date;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 14, nullable: false})
    cpf_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 12, nullable: false})
    rg_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 9, nullable: false})
    cep_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 150, nullable: false})
    endereco_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length:14, nullable: false})
    telefone_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    email_usuario: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 15, nullable: false})
    senha_usuario: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    descricao_usuario: string;

    @ApiProperty({type: () => Produto})
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto : Produto []

}