import { CreateCategoriaDto } from './create-categoria.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {}
 