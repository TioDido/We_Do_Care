import { Usuario } from "./entities/usuario.entity";
import { Module } from "@nestjs/common"
import { UsuarioController } from "./controllers/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/brypt/bcrypt";


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService, Bcrypt],
    controllers: [UsuarioController],
    exports: [UsuarioService]
})


export class UsuarioModule{}