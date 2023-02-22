import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import passport from 'passport';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`listening on port ${port}`);
}

// const config = new DocumentBuilder()
//   .setTitle('Slack API')
//   .setDescription('Slack 개발을 위한 문서')
//   .setVersion('1.0')
//   .addCookieAuth('connect.sid')
//   .build();

// const document = SwaggerModule.createDocument(app, config);
// SwaggerModule.setup('api', app, document);
bootstrap();
