import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Adicione isso para logar erros detalhados no console
  app.useGlobalFilters({
    catch(exception, host) {
      console.error(exception);
      throw exception;
    }
  });

  await app.listen(3000);
}
bootstrap();
