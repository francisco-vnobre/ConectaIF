import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuarioDto } from "./dtos/create-usuario.dto";
import { PorIdDto } from "./dtos/por-id.dto";

@ApiTags("usuarios")
@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Post("novo")
  create(@Body() dados: CreateUsuarioDto) {
    return this.usuariosService.create(dados);
  }

  @Post("/busca-um")
  findById(@Body() dados: PorIdDto) {
    return this.usuariosService.buscaPorId(dados.id);
  }
}
