import { Module } from "@nestjs/common";
import { UsuariosController } from "./usuarios.controller";
import { UsuariosService } from "./usuarios.service";
import { DatabaseModule } from "src/database/database.module";
import { UsuariosProviders } from "./usuarios.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [...UsuariosProviders, UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
