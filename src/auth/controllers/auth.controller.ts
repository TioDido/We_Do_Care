import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";
import { UsuarioLogin } from "../entities/usuarioLogin.entity";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "../services/auth.service";

@ApiBearerAuth()
@ApiTags("/Auth")
@Controller("/auth")
export class AuthController{
    constructor(
        private authService : AuthService
    ){}


    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() usuario : UsuarioLogin): Promise<any>{
        return this.authService.login(usuario);
    }

}