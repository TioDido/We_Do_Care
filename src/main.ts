import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'

  const config = new DocumentBuilder()
  .setTitle('Projeto Integrador: We Do Care.')
  .setDescription('ODS 9')
  .setContact('Contato Generation', 'Generation Brazil', 'https://brazil.generation.org/')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
  
}
bootstrap();