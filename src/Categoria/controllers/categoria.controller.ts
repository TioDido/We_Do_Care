import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Body, Post, Patch, Delete } from '@nestjs/common'
import { Categoria } from '../entities/categoria.entity'
import { CategoriaService } from '../services/categoria.service'

@Controller("/categoria")
export class CategoriaController{
    constructor ( private readonly categoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }

    @Get('/search/:modelo')
    @HttpCode(HttpStatus.OK)
    findByModelo(@Param('modelo') modelo: string): Promise<Categoria[]> {
        return this.categoriaService.findByModelo(modelo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()categoria: Categoria): Promise<Categoria>{
    return this.categoriaService.create(categoria)
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    update(@Body()categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id)
    }
}

