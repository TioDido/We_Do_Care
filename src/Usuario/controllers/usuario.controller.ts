import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Body, Post, Patch, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';



@Controller("/usuario")
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){}

    //Criar um produto no banco de dados
    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    create(@Body()usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario);
    }

    //Mandar o método de atualizar funcionar no banco de dados
    @UseGuards(LocalAuthGuard)
    @Patch('/atualizar')
    @HttpCode(HttpStatus.OK)
    update(@Body()usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.update(usuario);
    }


}