import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for your frontend (adjust port if needed)
  app.enableCors({
    origin: 'http://localhost:3001', // Your frontend port
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000); // Backend port
}
bootstrap();
