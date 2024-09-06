import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "./entities/usuarios.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuariosService {
  constructor(
    @Inject("USUARIOS_REPOSITORY")
    private usuariosRepository: Repository<Usuario>
  ) {}

  async create(dados) {
    try {
      const response = await this.usuariosRepository
        .createQueryBuilder()
        .insert()
        .into(Usuario)
        .values({
          ...dados,
        })
        .execute();
      return response;
    } catch (error) {
      return error;
    }
  }
  async buscaPorId(id: number) {
    const usuario = await this.usuariosRepository.findOne({
      where: { id: id },
    });

    return usuario;
  }
}
