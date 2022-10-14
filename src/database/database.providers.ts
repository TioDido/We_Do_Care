import { DataSource } from 'typeorm';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql', //tipo banco de dados;
        host: 'localhost', //nome do meu host
        port: 3306, // porta a ser utilizada
        username: 'root', //nome do usuario
        password: 'root', //senha
        database: 'we_do_care', //nome do banco de dados
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, //tomar cuidado para não deixar ativado como TRUE em produção, sob risco de perda de dados no banco de dados.
      });
      return dataSource.initialize();
    },
  },
];