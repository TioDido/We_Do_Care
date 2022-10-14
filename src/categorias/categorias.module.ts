import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
