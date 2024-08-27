import { DocumentBuilder } from "@nestjs/swagger";

export const swagConfig = new DocumentBuilder()
  .addBearerAuth()
  .setTitle("Api ConectaIF")
  .setDescription(
    "API que gerencia dados registrados pela aplicação WEB e disponibilisa esses dados em ambas aplicações WEB/Mobile."
  )
  .setTitle("usuarios")
  .setVersion("1.0")
  .build();
