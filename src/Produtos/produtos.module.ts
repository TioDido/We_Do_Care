import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ProdutosController } from "./controllers/produtos.controller"
import { ProdutosService } from "./services/produtos.service"
import { Produto } from "./entities/produtos.entitie"

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers:[ProdutosService],
    controllers: [ProdutosController],
    exports: [TypeOrmModule]
})
export class ProdutosModule{}