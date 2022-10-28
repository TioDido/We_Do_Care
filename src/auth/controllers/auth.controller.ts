import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { UsuarioLogin } from "../entities/usuarioLogin.entity";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "../services/auth.service";



@Controller("/auth")
export class AuthController{
    constructor(
        private authService : AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() usuario : UsuarioLogin): Promise<any>{
        return this.authService.login(usuario);
    }

}