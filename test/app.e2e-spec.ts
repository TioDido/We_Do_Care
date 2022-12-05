import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../src/Usuario/entities/usuario.entity';

describe('Teste da WeDoCare (e2e)', () => {

  let token: any;
  let usuarioId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'we_do_care_test',
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
          dropSchema: true
        }),
      AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  })

  afterAll(async () => {
    await app.close()
  });

it('01-Cadastrar Usuario', async () => {
  const resposta = await request(app.getHttpServer())
  .post('/usuario/cadastrar')
  .send({
    nome_usuario: 'Carlao da 12',
    genero_usuario: 'Não Binarie',
    estado_civil: 'Viuvo',
    profissao_usuario: 'surfista',
    renda_usuario: '1',
    etnia_usuario: 'shines',
    data_usuario: '1648/10/05',
    cpf_usuario: '999.999.999-99',
    rg_usuario: '99.999.999-9',
    cep_usuario: '99999-999',
    endereco_usuario: 'Nao sei meu endereço sou mt burro e nao sei ler kkkkk top xd',
    telefone_usuario: '(99)99999-9999',
    email_usuaio: 'jirombaDoce@gmail.com',
    senha_usuario: 'Demetios123',
    descricao_usuario: 'Tenho 6 dedos.'
  });
  expect(200)
  usuarioId= resposta.body.id_usuario;
})

it('02-Autenticação do Usuario', async ()=> {
  const atenticacao = await request(app.getHttpServer())
  .post('/auth/logar')
  .send({
    email: 'jirombaDoce@gmail.com',
    senha: 'Demetios123'
  })
  expect(200)
  token = atenticacao.body.token
})

it('03-Duplicar Usuario', async () => {
  const resposta = await request(app.getHttpServer())
  .post('/usuario/cadastrar')
  .send({
    nome_usuario: 'Carlao da 12',
    genero_usuario: 'Não Binarie',
    estado_civil: 'Viuvo',
    profissao_usuario: 'surfista',
    renda_usuario: '1',
    etnia_usuario: 'shines',
    data_usuario: '1648/10/05',
    cpf_usuario: '999.999.999-99',
    rg_usuario: '99.999.999-9',
    cep_usuario: '99999-999',
    endereco_usuario: 'Nao sei meu endereço sou mt burro e nao sei ler kkkkk top xd',
    telefone_usuario: '(99)99999-9999',
    email_usuaio: 'jirombaDoce@gmail.com',
    senha_usuario: 'Demetios123',
    descricao_usuario: 'Tenho 6 dedos.'
  });
  expect(400)
})

it('04 - Atualizar Usuário', async () => {
  const atualizar = await request(app.getHttpServer())
  .post('/usuario/atualizar')
  .send({ 
      nome_usuario: 'rodrigo',
      genero_usuario: 'estranho',
      estado_civil: 'solteiro',
      profissao_usuario: 'surfista',
      renda_usuario: '1',
      etnia_usuario: 'doberman',
      data_usuario: '1648/10/05',
      cpf_usuario: '666.666.666-66',
      rg_usuario: '66.666.666-6',
      cef_usuario: '66666-666',
      endereco_usuario: 'carneiro brito de joão gomes levei no cano, 7532. Rio de Janeiro',
      telefone_usuario: '(21)96666-6666',
      email_usuario: 'carlao_mixuri@hotmail.com',
      senha_usuario: 'carlao1234',
      descricao_usuario: 'SOU DOIDO'
  })
  expect(201)
  usuarioId = atualizar.body.id_usuario
})




});
  

