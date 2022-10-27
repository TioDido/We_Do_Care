import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './Categoria/entities/categoria.entity';
import { CategoriaModule } from './Categoria/categoria.module';
import { ProdutosModule } from './Produtos/produtos.module';
import { Produto } from './Produtos/entities/produtos.entitie';
import { Usuario } from './Usuario/entities/usuario.entity';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'we_do_care',
      entities:[Categoria, Produto, Usuario],
      synchronize: false,
    }),
    UsuarioModule,
    CategoriaModule,
    ProdutosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
