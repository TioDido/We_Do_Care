import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Body, Post, Patch, Delete } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';



@Controller("/usuario")
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){}

    //Retornando para o método de achar todos
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    //Retornando para o método de achar pelo ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id_usuario', ParseIntPipe) id_usuario: number): Promise<Usuario>{
        return this.usuarioService.findById(id_usuario);
    }

    //Retornando pelo metodo de achar pelo nome
    @Get('/search/:nome')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('nome_usuario')nome_usuario:string): Promise <Usuario[]>{
        return   this.usuarioService.findByName(nome_usuario);
    }

    //Criar um produto no banco de dados
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario);
    }

    //Mandar o método de atualizar funcionar no banco de dados
    @Patch()
    @HttpCode(HttpStatus.OK)
    update(@Body()usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.update(usuario);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id_usuario', ParseIntPipe) id_usuario: number){
        return this.usuarioService.delete(id_usuario)
    }


}