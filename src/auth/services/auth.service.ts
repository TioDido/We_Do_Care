import { Injectable } from "@nestjs/common"
import { HttpStatus } from "@nestjs/common/enums"
import { HttpException } from "@nestjs/common/exceptions"
import { JwtService } from "@nestjs/jwt"
import { UsuarioService } from "src/Usuario/services/usuario.service"
import { Bcrypt } from "../brypt/bcrypt"


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt : Bcrypt
    ){}

    async validadeUser(email : string, password : string): Promise<any>{
        const buscarUsuario = await this.usuarioService.findByEmail(email)
        if (!buscarUsuario){
            throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND)
        }
        const match = await this.bcrypt.compararSenha(buscarUsuario.senha_usuario, password);
        if (buscarUsuario && match){
            const {senha_usuario, ...result} = buscarUsuario
            return result;
        }
        return null;
    }

    async login(usuarioLogin:any){
        const payload = {email: usuarioLogin.email_usuario, sub: "We_Do_Care"}
        return  {
            usuario: usuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payload)}`
        }
    }

}