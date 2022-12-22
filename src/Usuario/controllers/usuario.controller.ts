import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Body, Post, Patch, Delete, UseGuards} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { LocalAuthGuard } from '../../auth/guards/local-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { Put } from '@nestjs/common/decorators';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';



@ApiTags('Usuario')
@Controller("/usuario")
@ApiBearerAuth()
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService) {}

    // Criar um Usuario no Banco de Dados
    @Post("/cadastrar")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario);
    }

    // Atualizar Usuário pelo ID
    @UseGuards(JwtAuthGuard)
    @Put("/atualizar")
    @HttpCode(HttpStatus.OK)
    update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);

    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id);
    }



}