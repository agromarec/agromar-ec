import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';

// const allowCors = fn => async (req, res) => {
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // another common pattern
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//   );
//   if (req.method === 'OPTIONS') {
//     res.status(200).end();
//     return;
//   }
//   return await fn(req, res);
// };

// const handler = (req, res) => {
//   const d = new Date();
//   res.end(d.toString());
// };

// module.exports = allowCors(handler);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
  //   credentials: true,
  //   allowedHeaders: 'Content-Type, Authorization, Content-Length, X-Requested-With',
  // });


  app.enableCors({
    origin: '*', // Especifica el origen permitido
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    credentials: true, // Asegúrate de habilitar credenciales si es necesario
    allowedHeaders: 'Content-Type, Authorization, Content-Length, X-Requested-With',
  });

  app.useWebSocketAdapter(new IoAdapter(app));

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);

  Logger.log(`Server running on port ${port}`);
}
bootstrap();


