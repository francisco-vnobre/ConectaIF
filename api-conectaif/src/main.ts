import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { swagConfig } from "./utils/swagger-config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swagConfig);
  SwaggerModule.setup("docs", app, document, {
    swaggerOptions: {
      docExpansion: "none", // Recolhe todas as seções por padrão
      apisSorter: "alpha", // Ordena as APIs alfabeticamente
      operationsSorter: "alpha", // Ordena as operações alfabeticamente
    },
  });

  await app.listen(3335);
}
bootstrap();
