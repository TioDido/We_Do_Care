import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario> ){}

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
            return await this.usuarioRepository.save(usuario)
        }


        // Atualizar Usuário
        async update(usuario: Usuario): Promise<Usuario>{
            let buscaUsuario: Usuario = await this.findById(usuario.id_usuario);

            if (!buscaUsuario || !usuario.id_usuario){
                throw new HttpException('Id relacionado ao objeto não foi encontrado', HttpStatus.NOT_FOUND)
            }
            return await this.usuarioRepository.save(usuario)
        }
}
