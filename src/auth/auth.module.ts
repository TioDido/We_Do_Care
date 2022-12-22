import { Module } from "@nestjs/common";
import { Bcrypt } from "./brypt/bcrypt";
import { JwtModule } from "@nestjs/jwt";
import { UsuarioModule } from "../Usuario/usuario.module";
import { PassportModule } from "@nestjs/passport"
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";


@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '24h'},
        })
    ],
    providers: [Bcrypt,AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt]
})
export class AuthModule{}