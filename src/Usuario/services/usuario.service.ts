import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
import {Injectable, HttpStatus, HttpException} from "@nestjs/common";

@Injectable()
export class UsuarioService{

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
        ){}

    //Método achar pelo ID
    async findById(id_usuario:number): Promise<Usuario>{
        let usuario = await this.usuarioRepository.findOne({
            where:{
                id_usuario
            }
        });
        if (!usuario){
            throw new HttpException('ID referente ao produto não existe.', HttpStatus.NOT_FOUND)
        }
        return usuario;
    }

    
    async findByEmail(email_usuario: string): Promise <Usuario | undefined>{
        return await this.usuarioRepository.findOne({
            where: {
                email_usuario
            }
        })
    }

    //Método de criar dados no banco de dados
    async create(usuario: Usuario): Promise<Usuario>{
        return await this.usuarioRepository.save(usuario);
    }

    //Método de atualizar dados no banco de dados pelo ID
    async update(usuario: Usuario): Promise<Usuario>{
        let buscarUsuario: Usuario = await this.findById(usuario.id_usuario)
        if (!buscarUsuario || !usuario.id_usuario){
            throw new HttpException('ID referente ao produto não existe.', HttpStatus.NOT_FOUND);
    }
    return await this.usuarioRepository.save(usuario);
}
    
}