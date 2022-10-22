import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Body, Post, Patch, Delete } from '@nestjs/common';
import { Produto } from '../entities/produtos.entitie';
import { ProdutosService } from '../services/produtos.service';


@Controller("/produtos")
export class ProdutosController{
    constructor(private readonly produtosService: ProdutosService){}


    //Retornando para o método de achar todos
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtosService.findAll();
    }

    //Retornando para o método de achar pelo ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtosService.findById(id);
    }

    //Retornando para o método de achar pelo nome
    @Get('/search/:nome')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('nome')nome:string): Promise <Produto[]>{
        return   this.produtosService.findByName(nome);
    }

}