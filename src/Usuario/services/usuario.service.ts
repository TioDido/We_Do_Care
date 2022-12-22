import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Bcrypt } from '../../auth/brypt/bcrypt';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
        ){}

        // Método Achar Usuário pelo ID
        async findById(id_usuario: number): Promise<Usuario> {
            let usuario = await this.usuarioRepository.findOne({
                where: {
                    id_usuario
                }
            });
            if(!usuario) {
                throw new HttpException('Id Relacionado ao Objeto não foi encontrado.', HttpStatus.NOT_FOUND)
            }
            return usuario;
        }

        // Encontrar Usuário pelo Email
        async findByEmail(email_usuario: string): Promise< Usuario | undefined > {
            return await this.usuarioRepository.findOne({
                where: {
                    email_usuario
                }
            })
        }

        // Cadastrar Usuário
        async create(usuario: Usuario): Promise<Usuario> {
            let buscaUsuario = await this.findByEmail(usuario.email_usuario);

        if (!buscaUsuario) {
            usuario.senha_usuario = await this.bcrypt.criptrograrfarSenha(usuario.senha_usuario)
            return await this.usuarioRepository.save(usuario);
        }

        throw new HttpException("O Usuario ja existe!", HttpStatus.BAD_REQUEST);

    }
        


        // Atualizar Usuário
        async update(usuario: Usuario): Promise<Usuario>{
            let updateUsuario: Usuario = await this.findById(usuario.id_usuario);
            let buscaUsuario = await this.findByEmail(usuario.email_usuario);
    
            if (!updateUsuario)
                throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    
            if (buscaUsuario && buscaUsuario.id_usuario !== usuario.id_usuario)
                throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);
    
            usuario.senha_usuario = await this.bcrypt.criptrograrfarSenha(usuario.senha_usuario)
            return await this.usuarioRepository.save(usuario);
    }



}
