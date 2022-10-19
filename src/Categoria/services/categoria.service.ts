import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, ILike, DeleteResult } from 'typeorm'
import { Categoria } from '../entities/categoria.entity'

@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria> ){}

        // Método Achar Todos
        async findAll(): Promise<Categoria[]> {
            return await this.categoriaRepository.find();
        }

        // Método Achar pelo ID
        async findById(id: number): Promise<Categoria> {
            let categoria = await this.categoriaRepository.findOne({
                where: {
                    id
                }
            });
            if(!categoria) {
                throw new HttpException('Id Relacionado ao Objeto não foi encontrado.', HttpStatus.NOT_FOUND)
            }
            return categoria;
        }

        // Método Achar Pelo Nome
        async findByModelo(modelo: string): Promise<Categoria[]> {
            return await this.categoriaRepository.find({
                where: {
                    modelo: ILike(`%${modelo}%`)
                }
            })
        }

        //Mandar todos os dados para o banco de dados
        async create(categoria: Categoria): Promise<Categoria>{
            return await this.categoriaRepository.save(categoria)
        }


        //Atualizar todos os dados.
        async update(categoria: Categoria): Promise<Categoria>{
            let buscaCategoria: Categoria = await this.findById(categoria.id)
            if (!buscaCategoria || !categoria.id){
                throw new HttpException('Id relacionado ao objeto não foi encontrado', HttpStatus.NOT_FOUND)
            }
            return await this.categoriaRepository.save(categoria)
        }

        //Deletar os dados no banco de dados
        async delete(id: number): Promise<DeleteResult>{
            let buscaCategoria: Categoria = await this.findById(id);
            if(!buscaCategoria){
                throw new HttpException('Id relacionado ao objeto não foi enconntrado', HttpStatus.NOT_FOUND)
            }
            return await this.categoriaRepository.delete(id)
        }

        
} 