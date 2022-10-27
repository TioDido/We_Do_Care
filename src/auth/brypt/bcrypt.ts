import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'


@Injectable()
export class Brypt{
    async criptrograrfarSenha(senha:string): Promise<string>{
        let saltos = 10
        return await bcrypt.hash(senha, saltos)

    }

    async compararSenha(senhaBanco: string, senhaDigitada: string): Promise<boolean>{
        return bcrypt.compareSync(senhaDigitada, senhaBanco)
    }
}