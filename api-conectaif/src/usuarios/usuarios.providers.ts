import { DataSource } from "typeorm";
import { Usuario } from "./entities/usuarios.entity";

export const UsuariosProviders = [
  {
    provide: "USUARIOS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuario),
    inject: ["DATABASE_CONNECTION"],
  },
];
