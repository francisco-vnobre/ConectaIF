import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [DatabaseModule, UsuariosModule],
  providers: [AppService],
})
export class AppModule {}
