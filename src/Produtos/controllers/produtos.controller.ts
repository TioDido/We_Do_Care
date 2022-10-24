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

    //Retornando pelo metodo de achar pelo nome
    @Get('/search/:nome')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('nome')nome:string): Promise <Produto[]>{
        return   this.produtosService.findByName(nome);
    }

    //Criar um produto no banco de dados
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()produto: Produto): Promise<Produto>{
        return this.produtosService.create(produto);
    }

    //Mandar o método de atualizar funcionar no banco de dados
    @Patch()
    @HttpCode(HttpStatus.OK)
    update(@Body()produto:Produto): Promise<Produto>{
        return this.produtosService.update(produto);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtosService.delete(id)
    }

}