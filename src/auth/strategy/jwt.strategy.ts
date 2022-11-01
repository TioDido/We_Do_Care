import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-jwt";
import {PassportStrategy} from "@nestjs/passport"
import { jwtConstants } from "../constants/constants";
import { ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor (){
        super ({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any){
        return {
            userId: payload.sub, username: payload.username
        };
    }

}