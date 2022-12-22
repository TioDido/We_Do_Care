import {Injectable, UnauthorizedException} from '@nestjs/common'
import { Strategy } from 'passport-local';
import {PassportStrategy} from '@nestjs/passport'
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor (private authService: AuthService){
        super ({
            usernameField: 'email',
            passwordField: 'senha'
    })}

    async validate(username: string, password: string): Promise<any>{
        const user = await this.authService.validadeUser(username, password);
        if (!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}