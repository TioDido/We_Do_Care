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
import { AuthModule } from './auth/auth.module';
import { Strategy } from 'passport-local';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    /* TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'we_do_care',
      entities: [Usuario, Produto, Categoria],
      synchronize: true,
    }), */
   
    CategoriaModule,
    ProdutosModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
providers: [],
})
export class AppModule {}
